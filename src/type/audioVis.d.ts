export {};
declare global {

    interface Window {
        wallpaperRegisterAudioListener:any;

        wallpaperMediaIntegration: typeof wallpaperMediaIntegration_enum;
        wallpaperRegisterMediaPlaybackListener:any;
        wallpaperRegisterMediaPropertiesListener:any;
    }
}
export enum wallpaperMediaIntegration_enum{
    PLAYBACK_PLAYING,
    PLAYBACK_PAUSED,
    PLAYBACK_STOPPED
}