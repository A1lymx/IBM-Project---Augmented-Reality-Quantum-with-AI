# Configuration

## Important Links

Our final product can be viewed [here](https://atlantaemrys2002.github.io/ARQuantum/). Sample Unity files have been deployed on Vite servers and can be viewed [here](https://github.com/AtlantaEmrys2002/PresentationSample) and [here](https://atlantaemrys2002.github.io/blah/) with the code for these sample files stored [in this repository](https://github.com/AtlantaEmrys2002/blah)

## Running Project

### Production Build

Please follow these instructions to deploy our code on your systems.

1. Download the directory ```website_framework``` - this can be found [here](./Code/Website/website_framework) or by following the file path ```Code/Website/website_framework```.
2. Download yarn using one of the following methods:
   1. Homebrew: ``` brew install yarn ``` (recommended)
   2. npm: ```npm install yarn```
   3. Other methods available [here](https://classic.yarnpkg.com/lang/en/docs/install/) 
3. Run ```yarn install``` to install all dependencies.
4. Run ```yarn build``` to create a production build (for deployment purposes).
5. You may want to follow the instructions in the [Development Server](#development-server) section to test the build/product locally.
6. You may have to change/comment out the following line (located in the ```next.config.mjs``` file): 
   ``` 
   assetPrefix: isProd ? 'https://atlantaemrys2002.github.io/ARQuantum' : undefined,
   ```
7. To deploy to GitHub pages:
   1. Then, follow the instructions detailed in this [video](https://www.youtube.com/watch?v=mJuz45RXeXY). However, do not make any of the code edits that are suggested in the video, as they will conflict with the configuration that has been created.
   2. Uncomment the line from instruction 6. Edit it such that the included ```https://``` link is a link to your GitHub page. E.g. if your GitHub page is hosted at 'https://githubuser1.github.io/ClonedVersionARQuantum', the line in ```next.config.mjs``` should read:
       ``` 
      assetPrefix: isProd ? 'https://githubuser1.github.io/ClonedVersionARQuantum' : undefined,
      ```
   3. If you encounter any problems when implementing the previous instruction, please consult the [Next.js Documentation](https://nextjs.org/docs/pages/api-reference/next-config-js/assetPrefix)

### Development Server

Please follow these instructions to run a local version of our code that you can make edits too.

1. Follow instructions 1 to 4 in the [Production Build](#production-build) section.
2. Run
   ```bash
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## Additional Resources

- [Carbon Design's React Tutorial](https://carbondesignsystem.com/developing/react-tutorial/step-1) - consulted during the building of this website framework to conform to IBM's Design Standards. Code within the first website framework commit was partially modified from tutorial resources. In the first commit, package.json was edited to more closely reflect the package.json file from the associated [GitHub repository](https://github.com/carbon-design-system/carbon-tutorial-nextjs/blob/main/package.json). However, it has now diverged significantly from the initial source material.
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Needle.js Documentation](https://engine.needle.tools/docs/getting-started.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Sass Documentation](https://sass-lang.com/documentation/)
- [IBM Watsonx Assistant Documentation](https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-getting-started)
- [IBM Watson Text-to-Speech Reference](https://cloud.ibm.com/apidocs/text-to-speech)

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7ZAMQJ2s)
