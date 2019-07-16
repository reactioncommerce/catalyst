const fs = require("fs-extra");
const path = require("path");

// Arguments are positional: componentName
let componentName;
let shouldBumpVersion = false;
process.argv.forEach(function (value, index) {
  switch (index) {
    case 2:
      componentName = value;
      break;

    default:
      break;
  }
});

function errorAndExit(message) {
  console.error(`\n${message}\n`);
  process.exit(1);
}

if (!componentName) {
  errorAndExit("You must include the name of the component to create as the first argument of this script");
}

const BASE_PATH = path.join(process.cwd(), "package/src/components");
const componentDirectory = path.join(BASE_PATH, componentName);

function createComponentIndexFile(name) {
  const filePath = path.join(componentDirectory, `index.js`);
  let template = fs.readFileSync(".reaction/scripts/templates/index.js.template", { encoding: "utf8" });
  template = template.replace(/COMPONENT/g, name);
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, template);
}

function createComponentFile(name) {
  const filePath = path.join(componentDirectory, `${name}.js`);
  let template = fs.readFileSync(".reaction/scripts/templates/Component.js.template", { encoding: "utf8" });
  template = template.replace(/COMPONENT/g, name);
  template = template.replace(/cOMPONENT/g, name.charAt(0).toLowerCase() + name.slice(1));
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, template);
}

function createComponentTestFile(name) {
  const filePath = path.join(componentDirectory, `${name}.test.js`);
  let template = fs.readFileSync(".reaction/scripts/templates/Component.test.js.template", { encoding: "utf8" });
  template = template.replace(/COMPONENT/g, name);
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, template);
}

function createComponentMarkdownFile(name) {
  const filePath = path.join(componentDirectory, `${name}.md`);
  let template = fs.readFileSync(".reaction/scripts/templates/Component.md.template", { encoding: "utf8" });
  template = template.replace(/COMPONENT/g, name);
  fs.ensureFileSync(filePath);
  fs.writeFileSync(filePath, template);
}

/**
 * Main logic below
 */
if (fs.existsSync(componentDirectory)) errorAndExit(`${componentDirectory} already exists`);

createComponentIndexFile(componentName);
createComponentFile(componentName);
createComponentTestFile(componentName);
createComponentMarkdownFile(componentName);
