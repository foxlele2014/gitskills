export const searchWord = text => {
    return {
        type: 'SEARCH',
        payload: {
            searchKey: text
        }
    };
};

export const saveResult = list => {
    return {
        type: 'SAVE',
        payload: {
            searchList: list
        }
    };
};

export const getVoice = voice => {
    return {
        type: 'GETVOICE',
        payload: {
            voice: voice
        }
    };
};

export const getNotes = notes => {
    return {
        type: 'GETNOTES',
        payload: {
            notes: notes
        }
    };
};

export const getRelation = data => {
    return {
        type: 'GETRELATIOIN',
        payload: {
            relation: data
        }
    };
};

/**
 * dispatch(searchWord(text));
 */
