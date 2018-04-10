export default {
    namespaced: true,
    state: {
        invoices: [
            {
                invoiceId: '90070456',
                caseId : '1015587',
                balance: 2300,
                initialBalance: 4000,
                invoiceDeliveryText: 'Handed on 06/12/17'
            },
            {
                invoiceId: '90070236',
                caseId : '1015587',
                balance: 2700,
                initialBalance: 4200,
                invoiceDeliveryText: 'Emailed/fax on 03/11/17'
            },
            {
                invoiceId: '90070212',
                caseId : '1015333',
                balance: 1000,
                initialBalance: 2000,
                invoiceDeliveryText: 'Emailed/fax on 04/08/17, Handed on 06/08/17'
            },
        ]
        
    },
    getters: {
        getInvoices(state){
            return state.invoices
        }
    },
    mutations: {
        saveAction(state,entry){
            //post entity to server
        }
    },
    actions: {
        saveDeliveryAction({state,commit},entry){
            commit('saveAction',entry);
        }
    }
}