var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  async initPackage() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname, // Default to current folder name
      },
      // {
      //   type: "confirm",
      //   name: "cool",
      //   message: "Would you like to enable the Cool feature?",
      // },
    ]);

    this.log("app name", answers.name);

    const pkgJson = {
      name: answers.name,
      version: "1.0.0",
      description: "",
      main: "generator/app/index.js",
      scripts: {
        test: 'echo "Error: no test specified" && exit 1',
      },
      keywords: [],
      author: "",
      license: "ISC",
      dependencies: {},
      devDependencies: {
        webpack: "^4.44.1",
        "copy-webpack-plugin": "^6.4.1",
        // "vue-loader": "^15.9.3",
        // eslint: "^3.15.0",
      },
    };
    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
    this.npmInstall(["vue"], { "save-dev": false });
    this.npmInstall(
      [
        // "webpack",
        "vue-template-compiler",
        "vue-loader",
        "vue-style-loader",
        "css-loader",
      ],
      { "save-dev": true }
    );

    this.npmInstall();
    // this.npmInstall(["webpack"], { "save-dev": true, version: "@4.44.1" });
    this.fs.copyTpl(
      this.templatePath("HelloWord.vue"),
      this.destinationPath("src/HelloWord.vue")
    );
    this.fs.copyTpl(
      this.templatePath("main.js"),
      this.destinationPath("src/main.js")
    );
    this.fs.copyTpl(
      this.templatePath("webpack.config.js"),
      this.destinationPath("webpack.config.js")
    );
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("src/index.html"),
      {
        title: answers.name,
      }
    );
  }
  copyFiles() {}
};
