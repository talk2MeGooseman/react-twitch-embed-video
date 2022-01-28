import React from 'react';
declare const _default: {
    title: string;
    component: React.MemoExoticComponent<{
        (props: import("../useEmbedApi").IChannelEmbedParameters | import("../useEmbedApi").IVodCollectionEmbedParameters | import("../useEmbedApi").IVodEmbedParameters): JSX.Element;
        defaultProps: {
            targetId: string;
            width: string;
            height: string;
            autoplay: boolean;
            muted: boolean;
        };
    }>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        player1Channel: {
            description: string;
        };
        player2Channel: {
            description: string;
        };
    };
};
export default _default;
export declare const MultiplePlayers: {
    ({ player1Channel, player2Channel, }: {
        player1Channel: string;
        player2Channel: string;
    }): JSX.Element;
    args: {
        player1Channel: string;
        player2Channel: string;
    };
};
