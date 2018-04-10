export default {
    namespaced: true,
    state: {
        commLog:[
            {
                //Invoice (orange),Payment (green), SMS (purple),Note (blue) Invoice delivery (grey)
                recordType: 'Invoice', 
                recordDate: '05/12/2016',
                color: 'orange',
                createdBy: 'Pantelitsa Geo.',
                recordText: 'New Invoice (90070456/1015587): 500',
                balance: 17500
            },
            {
                //Invoice (orange),Payment (green), SMS (purple),Note (blue) Invoice delivery (grey)
                recordType: 'Payment', 
                recordDate: '05/12/2016',
                color: 'darkseagreen',
                createdBy: 'Marios Char.',
                recordText: 'Payment 3000 (90102454/10241234)',
                balance: 14500
            },
            {
                //Invoice (orange),Payment (green), SMS (purple),Note (blue) Invoice delivery (grey)
                recordType: 'SMS', 
                recordDate: '25/01/2017',
                color: 'mediumpurple',
                createdBy: 'Marios Mic.',
                recordText: 'Dear Mr. Andreou ...'
            },
            {
                //Invoice (orange),Payment (green), SMS (purple),Note (blue) Invoice delivery (grey)
                recordType: 'Invoice Delivery', 
                recordDate: '06/12/2016',
                color: 'grey',
                createdBy: 'Melanthie Mar.',
                recordText: 'Handed Invoice (90070456/1015587)'
            },
            {
                //Invoice (orange),Payment (green), SMS (purple),Note (blue) Invoice delivery (grey)
                recordType: 'Invoice Delivery', 
                recordDate: '05/12/2016',
                color: 'grey',
                createdBy: 'Melanthie Mar.',
                recordText: 'Emailed / Faxed Invoice (90070456/1015587)'
            },
            {
                //Invoice (orange),Payment (green), SMS (purple),Note (blue) Invoice delivery (grey)
                recordType: 'Note', 
                recordDate: '17/01/2017',
                color: 'lightblue',
                createdBy: 'Melanthie Mar.',
                recordText: 'Called me. Promised to pay 2000 next week'
            },
        ]
    },
    getters: {
        commLogRecordsByDate(state){
            return state.commLog
        }
    },
    mutations: {
        addCommLogEntry(state,entry){
            //post entity to server
        }
    },
    actions: {
        addEntry({state,commit},entry){
            commit('addCommLogEntry',entry);
        }
    }
}