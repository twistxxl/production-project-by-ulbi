import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    if (!config) {
        throw new Error('Webpack config is undefined');
    }

    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // Инициализация resolve
    config.resolve = config.resolve || {};
    config.resolve.modules = config.resolve.modules || [];
    config.resolve.extensions = config.resolve.extensions || [];

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    // Инициализация module
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Обработка SVG правил
    config.module.rules = config.module.rules.map((rule: unknown) => {
        const webpackRule = rule as RuleSetRule;
        
        if (!webpackRule || !webpackRule.test) {
            return webpackRule;
        }

        const testString = typeof webpackRule.test === 'string' 
            ? webpackRule.test 
            : webpackRule.test.toString();
            
        if (/svg/.test(testString)) {
            return { ...webpackRule, exclude: /\.svg$/i };
        }

        return webpackRule;
    });

    // Добавление новых правил
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    
    config.module.rules.push(buildCssLoader(true));

    // Инициализация plugins
    config.plugins = config.plugins || [];
    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
        })
    );

    return config;
};