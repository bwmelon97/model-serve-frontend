import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MediaState = {
    videoUrl:       string;             // Video Blob url
    videoFile:      File | Blob | null; // Video File
    frameUrls:      string[];           // Video frame image urls
    keyFrameIdx:    number;             // Video Key Frame Index
    keyFrameFile:   File | Blob | null; // Key Frame File
    refImgUrl:      string;             // Reference image url
    refImgFile:     File | Blob | null; // Reference image file
    maskImgUrl:     string;             // Mask Image Url
    maskImgFile:    File | Blob | null; // Mask Image File
};

/**
 * Initial State of Media State
 */
const initialState: MediaState = {
    videoUrl: '',
    videoFile: null,
    frameUrls: [],
    keyFrameIdx: -1,
    keyFrameFile: null,
    refImgUrl: '',
    refImgFile: null,
    maskImgUrl: '',
    maskImgFile: null,
};

/**
 * Media Slice
 */
export const media = createSlice({
    initialState: initialState,
    name: 'media',
    reducers: {
        /**
         * Set the video url & file
         */
        setVideo: (state, action: PayloadAction<Pick<MediaState, "videoUrl" | 'videoFile' >>) => {
            return {
                ...state, 
                videoUrl: action.payload.videoUrl,
                videoFile: action.payload.videoFile,
            };
        },

        setFrameUrls: (state, action: PayloadAction<string[]>) => {
            return {...state, frameUrls: action.payload};
        },

        /**
         * Add new frame to frame urls list
         * @param state - Previous State
         * @param action - Payload action, which has a new frame image url
         * @returns - Updated State
         */
        addFrameUrl: (state, action: PayloadAction<string>) => {
            return {...state, frameUrls: [...state.frameUrls, action.payload]}
        },

        /**
         * Select Key Frame Index
         * @param state Prev State
         * @param action Payload: new key frame index
         * @returns Next State
         */
        selectKeyFrameIdx: (state, action: PayloadAction<number>) => {
            return {...state, keyFrameIdx: action.payload};
        },

        /**
         * Set Reference Image
         * @param state Prev State
         * @param action Payload: New Reference Image url & file
         * @returns Next State
         */
        setRefImg: (state, action: PayloadAction< Pick<MediaState, 'refImgFile' | 'refImgUrl'> > ) => {
            return {
                ...state,
                refImgUrl: action.payload.refImgUrl,
                refImgFile: action.payload.refImgFile,
            }
        },

        /**
         * 
         */
        setMaskImg: (state, action: PayloadAction<Pick<MediaState, 'maskImgUrl' | 'maskImgFile'>> ) => {
            return {
                ...state,
                maskImgUrl: action.payload.maskImgUrl,
                maskImgFile: action.payload.maskImgFile,
            }
        }
    },
});

export const mediaActions = media.actions;
export const mediaReducer = media.reducer;
