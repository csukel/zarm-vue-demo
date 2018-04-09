export default {
    namespaced: true,
    state: {
        tabs: [
            {
              key: 1,
              title: "All with unpaid invoices",
              counter: 4013,
              amount: "4100K EUR",
              active: true
            },
            {
              key: 2,
              title: "Balance <= 1000",
              counter: 3250,
              amount: "405K EUR",
              active: false
            },
            {
              key: 3,
              title: "1000 < Balance <= 10000",
              counter: 565,
              amount: "1475K EUR",
              active: false
            },
            {
              key: 4,
              title: "10000 < Balance <= 50000",
              counter: 52,
              amount: "846K EUR",
              active: false
            },
            {
              key: 5,
              title: "Balance > 50000",
              counter: 8,
              amount: "574K EUR",
              active: false
            },
            {
              key: 6,
              title: "Do not Contact",
              counter: 150,
              amount: "120K EUR",
              active: false
            },
            {
              key: 7,
              title: "Handled by Lawyer",
              counter: 53,
              amount: "680K EUR",
              active: false
            }
          ]
    },
    getters: {
        tabs () {
            return state.tabs
        }
    },
    mutations: {
        setTabState (state,{tab,bActive}) {
            tab.active = bActive;
        }
    },
    actions: {
        setActive({state,commit},tab){
            if (!tab.active){
                const activeTab = state.tabs.find(item => item.active === true);
                commit('setTabState',{tab:activeTab,bActive:false});
                commit('setTabState',{tab,bActive:true});

                //filter customers balances data set accordingly
            }
        }
    }
}