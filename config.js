System.config({
  "paths": {
    "*": "*.js",
    "aurelia-jade-viewstrategy/*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "aurelia-binding": "github:aurelia/binding@0.3.2",
    "aurelia-metadata": "github:aurelia/metadata@0.3.1",
    "jade": "github:johnsoftek/plugin-jade@1.9.0",
    "github:aurelia/binding@0.3.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.2"
    }
  }
});

