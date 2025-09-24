// import { Node, Project, SyntaxKind } from 'ts-morph';
// import path from 'path';

// const removeFeatureName = process.argv[2]; //example isArticleEnabled
// const featureState = process.argv[3]; // example off/on

// if (!removeFeatureName) {
//     throw new Error('Укажите название фичи');
// }

// if (!featureState) {
//     throw new Error('Укажите состояние фичи');
// }

// if (featureState !== 'on' && featureState !== 'off') {
//     throw new Error('Укажите состояние фичи(on/off)');
// }

// const project = new Project({});

// project.addSourceFilesAtPaths('src/**/ArticleDetailPage.tsx');
// // TODO
// // project.addSourceFilesAtPaths('src/**/*.ts');
// // project.addSourceFilesAtPaths('src/**/*.tsx');

// const files = project.getSourceFiles();

// function isToggleFunction(node: Node) {
//     let isToggleFetures = false
//     node.forEachChild((child) => {
//         if (
//         child.isKind(SyntaxKind.Identifier) &&
//         child.getText() === 'toggleFeatures'
//         ) {
//             isToggleFetures = true
//         }
//     })

//     return isToggleFetures
// }

// files.forEach((sourceFile) => {
//     sourceFile.forEachDescendant((node) => {
//         if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
//             const objectOptions = node.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression);

//             if (!objectOptions) {
//                 return
//             }

//             const onFunctionProperty = objectOptions.getProperty('on')
//             const offFunctionProperty = objectOptions.getProperty('off')

//             const featureNameProperty = objectOptions.getProperty('name')

//             const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)
//             const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction)

//             const featureName = featureNameProperty
//             ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
//             ?.getText().slice(1, -1)

//             if (featureName !== removeFeatureName) {
//                 return
//             }

//             if (featureState === 'on') {
//                 node.replaceWithText(onFunction?.getBody().getText() || '');
//             }

//             if (featureState === 'off') {
//                 node.replaceWithText(onFunction?.getBody().getText() || '');
//             }
            

//             console.log(onFunction?.getText());
//             console.log(offFunction?.getText());
//             console.log(featureName);
            
//         }
//     })
// });

// project.save();
import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isArticleEnabled
const featureState = process.argv[3]; // example off\on

if (!removedFeatureName) {
    throw new Error('Укажите название фича-флага');
}

if (!featureState) {
    throw new Error('Укажите состояние фичи (on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Некорректное значение состояния фичи (on или off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true;
        }
    });

    return isToggleFeatures;
}

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );

            if (!objectOptions) return;

            const offFunctionProperty = objectOptions.getProperty('off');
            const onFunctionProperty = objectOptions.getProperty('on');

            const featureNameProperty = objectOptions.getProperty('name');

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);

            if (featureName !== removedFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();

