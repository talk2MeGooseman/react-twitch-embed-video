import React from 'react';
import { IChannelEmbedParameters, IVodCollectionEmbedParameters, IVodEmbedParameters } from '../useEmbedApi';
declare const _default: {
    title: string;
    component: React.MemoExoticComponent<{
        (props: IChannelEmbedParameters | IVodCollectionEmbedParameters | IVodEmbedParameters): JSX.Element;
        defaultProps: {
            targetId: string;
            width: string;
            height: string;
            autoplay: boolean;
            muted: boolean;
        };
    }>;
    args: {
        video: string;
    };
    argTypes: {
        onPlay: {
            action: string;
        };
        onReady: {
            action: string;
        };
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const VODExample: (args: IVodCollectionEmbedParameters | IVodEmbedParameters | IChannelEmbedParameters) => JSX.Element;
