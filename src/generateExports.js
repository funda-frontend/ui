/*
 * This code's final goal is to produce a file, listing all component imports, and export them.
 *
 * @const `dir` The directory holding the components for our list.
 * @var `indexPath.` The file to which we'll write the list, the end result.
 * @const `extension` The component's file type extension.
 *
 * Hint: Read this code starting at autoExportComponents(); to understand it's overall cohereance.
 */
const { join, resolve } = require('path');
const {
    readdirSync,
    existsSync,
    unlink,
    writeFile,
    appendFile,
} = require('fs');
const { camelCase, upperFirst } = require('lodash');

const dir = join(resolve(), 'src/components');
const indexPath = 'src/index.js';
const extension = '.vue';
let data = '';
let components = [];

function filterByVueExtension(file) {
    return file.indexOf(extension) !== -1;
}

function getFilesFromDir() {
    return readdirSync(dir).filter(filterByVueExtension);
}

function removeExtensionFromFiles(items) {
    let componentsArr = [];
    items.forEach((item) => {
        let tempItem = {};
        tempItem['name'] = createComponentName(item);
        tempItem['file'] = item;
        componentsArr.push(tempItem);
    });
    return componentsArr;
}

function removeExtension(file) {
    return file.split('.').slice(0, -1).join('.');
}

function createComponentName(component) {
    let tempComponentName;
    tempComponentName = removeExtension(component);
    tempComponentName = camelCase(tempComponentName);
    tempComponentName = upperFirst(tempComponentName);
    return tempComponentName;
}

function getComponents() {
    const componentsArr = getFilesFromDir();
    components = removeExtensionFromFiles(componentsArr);
}

function createDataString() {
    if (components && components.length) {
        components.forEach((component) => {
            data += `
import ${component.name} from './components/${component.file}'; `;
        });

        data += `

export { ${components.map((component) => component.name)} };`;
    }
}

function logError(err) {
    if (err) throw err;
}

function deleteIndexFile() {
    unlink(indexPath, (err) => logError(err));
}

function createIndexFile() {
    writeFile(indexPath, '', (err) => logError(err));
}

function addDataToFile() {
    appendFile(indexPath, data.trim(), (err) => logError(err));
}

function exportComponents() {
    existsSync(indexPath) ? deleteIndexFile() : createIndexFile();
    addDataToFile();
}

function autoExportComponents() {
    getComponents();
    createDataString();
    exportComponents();
}

autoExportComponents();
