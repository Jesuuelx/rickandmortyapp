export const initialState = {
    items:[],
    isLoading:false,
    page:0,
    whiteList:JSON.parse( localStorage.getItem('whiteList') ) || [],
    itemSelect:null,
    character:{},

}

export const setItemsState = { items:[
    {
        id:1,
        name:'ABC',
        status:'alive',
        gender:'male',
        img:'img'

    },
    {
        id:2,
        name:'ANBA',
        status:'unkdown',
        gender:'female',
        img:'img'

    } ],isLoading:false,
    page:0,
    whiteList:JSON.parse( localStorage.getItem('whiteList') ) || [],
    itemSelect:null,
    character:{}



}

export const demoItems = {items:[
    {
        id:1,
        name:'ABC',
        status:'alive',
        gender:'male',
        img:'img'

    },
    {
        id:2,
        name:'ANBA',
        status:'unkdown',
        gender:'female',
        img:'img'

    }
]}


export const demoDataCharacter =  {
    name:'ABC',
    status:'alive',
    gender:'male',
    img:'img'

}

export const setItemsStateAndWhiteList = { items:[
    {
        id:1,
        name:'ABC',
        status:'alive',
        gender:'male',
        img:'img'

    },
    {
        id:2,
        name:'ANBA',
        status:'unkdown',
        gender:'female',
        img:'img'

    } ],isLoading:false,
    page:0,
    whiteList:[{
        name:'ABC',
        status:'alive',
        gender:'male',
        img:'img'
    
    }],
    itemSelect:null,
    character:{}



}
