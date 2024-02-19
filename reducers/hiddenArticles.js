import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const hiddenArticlesSlice = createSlice({
    name: 'hiddenArticles',
    initialState,
    reducers: {
        addHiddenArticle: (state, action) => {
            state.value.push(action.payload);
        },
        removeHiddenArticleAll: (state, action) => {
            state.value = []
        }
    },
});

export const { addHiddenArticle, removeHiddenArticleAll } = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
