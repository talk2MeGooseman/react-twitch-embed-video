import { ITwitchEmbed } from './useEmbedApi';
interface IAddEventListener {
    (event: string, callback: () => void): () => void;
}
declare const useEventListener: (embedObj: ITwitchEmbed | undefined) => IAddEventListener;
export { useEventListener };
