import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isDev: boolean;
    isTsx?: boolean;
}

export function buildBabelLoader(options: BuildBabelLoaderProps) {
    const { isDev, isTsx } = options;
    const isProd = !isDev;

    return {
        test: isTsx ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX: isTsx,
                            // allExtensions: true,
                        },
                    ],
                    '@babel/plugin-transform-runtime',
                    isTsx && isProd && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid'],
                        },
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
            },
        },
    };
}
