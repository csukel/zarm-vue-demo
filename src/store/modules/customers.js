export default {
    namespaced: true,
    state: {
        headers: [
            {
                text: 'Customer SAP Number',
                align: 'left',
                sortable: true,
                class: ['customColumnHeader'],
                value: 'customerId'
            },
            {
                text: 'Customer Name',
                align: 'left',
                sortable: true,
                value: 'customerName'
            },
            {
                text: 'Customer Balance',
                align: 'left',
                sortable: true,
                value: 'balance'
            },
            {
                text: 'Last Payment or Invoice',
                align: 'left',
                sortable: false,
                value: 'lastPayInvDate',
                width: ''
            },
            {
                text: 'Last Contact',
                align: 'left'
            },
            {
                text: 'Type of Last Contact',
                align: 'left'
            },
            {
                text: 'Next Contact Date',
                align: 'left'
            },
            {
                text: 'Inurance on earliest Unpaid Invoice',
                align: 'left'
            },
            {
                text: 'Age of earliest Unpaid Invoice',
                align: 'left'
            },
            {
                text: 'Other',
                align: 'left'
            },
            {
                text: 'Flag',
                align: 'left'
            }
        ],
        customers_details: [
            {
                customerId: '106123',
                customerName: 'Charalambous Andreas',
                gender: 'Male',
                age: 60,
                dob: '09/01/1958',
                mobile: '99123456',
                tel : '22385621',
                email: 'c.andreas58@gmail.com',
                fax: '22469341',
                nextKinName: 'Maria Costa',
                nextKinMobile: '99451435',
                nextKinTel: '22545931',
                nextKinEmail: 'm.costa@gmail.com',
                flag: 'green',
                other: 'nil',
                contact:'Do not Contact',
                legal: 'nil'
            },
            {

                customerId: '106874',
                customerName: 'Economou Georgia',
                gender: 'Female',
                age: 40,
                dob: '20/04/1978',
                mobile: '99542153',
                tel : '22783212',
                email: 'economou.georgia@gmail.com',
                fax: '22784213',
                nextKinName: 'Economou Costas',
                nextKinMobile: '99453213',
                nextKinTel: '22478312',
                nextKinEmail: 'economou.costas@gmail.com',
                flag: 'yellow', //null(default value), green,yellow,red
                other: 'nil', //null(default value),passed away(red color)
                contact:'In contact list', //in contact list (default value), do not contact(red color)
                legal: 'nil' //null (default value), Handled by Lawyers(red color)
            },
            {
                customerId: '106543',
                customerName: 'Antreou Christos',
                gender: 'Male',
                age: 35,
                dob: '30/10/1983',
                mobile: '99564210',
                tel : '22394012',
                email: 'antreou_christos@gmail.com',
                fax: '22394013',
                nextKinName: 'Antreou George',
                nextKinMobile: '99455212',
                nextKinTel: '22394012',
                nextKinEmail: 'antreou.george@gmail.com',
                flag: 'nil', //null(default value), green,yellow,red
                other: 'nil', //null(default value),passed away(red color)
                contact:'In contact list', //in contact list (default value), do not contact(red color)
                legal: 'Handled by Lawyers' //null (default value), Handled by Lawyers(red color)
            },
            {
                customerId: '107624',
                customerName: 'Anastasiou Maria',
                gender: 'Female',
                age: 45,
                dob: '1973-12-31',// new Date('1973-12-31'), //'31/12/1973'
                mobile: '99243010',
                tel : '22869540',
                email: 'aanastasiou_maria@gmail.com',
                fax: '22869541',
                nextKinName: 'Anastasiou Iacovos',
                nextKinMobile: '99542102',
                nextKinTel: '22869540',
                nextKinEmail: 'iacovos_anast@gmail.com',
                flag: 'red', //null(default value), green,yellow,red
                other: 'Passed Away', //null(default value),passed away(red color)
                contact:'Do not Contact', //in contact list (default value), do not contact(red color)
                legal: 'nil' //null (default value), Handled by Lawyers(red color)
            },
            {
                customerId: '105685',
                customerName: 'Panayiotou Antreas',
                gender: 'Male',
                age: 50,
                dob: '05/03/1968',
                mobile: '99261067',
                tel : '22796542',
                email: 'antreas_panayiotou@gmail.com',
                fax: '22796541',
                nextKinName: 'Panayiotou Maria',
                nextKinMobile: '99542013',
                nextKinTel: '22796542',
                nextKinEmail: 'maria.panayiotou@gmail.com',
                flag: 'nil', //null(default value), green,yellow,red
                other: 'nil', //null(default value),passed away(red color)
                contact:'In contact list', //in contact list (default value), do not contact(red color)
                legal: 'nil' //null (default value), Handled by Lawyers(red color)
            },
            {
                customerId: '108586',
                customerName: 'Neophytou Antonis',
                gender: 'Male',
                age: 85,
                dob: '17/06/1933',
                mobile: '9954021',
                tel : '22865920',
                email: 'antonis_neophytou@gmail.com',
                fax: '22865922',
                nextKinName: 'Neophytou Nektarios',
                nextKinMobile: '99520121',
                nextKinTel: '22865920',
                nextKinEmail: 'nektarios.neophytou@gmail.com',
                flag: 'nil', //null(default value), green,yellow,red
                other: 'nil', //null(default value),passed away(red color)
                contact:'In contact list', //in contact list (default value), do not contact(red color)
                legal: 'nil' //null (default value), Handled by Lawyers(red color)
            }
        ],
        customers_balances: [
            {
                customerId: '106123',
                customerName: 'Charalambous Andreas',
                balance: 10000,
                lastPayInvDate: '22/10/2017',
                lastContactDate: '05/01/18',
                typeOfLastContact: 'Call',
                nextContactDate: '05/02/18',
                insurance: 'Universal',
                ageOfEarliestUnpaidInv: 80,
                other: null,
                flag: 'green'
            },
            {
                customerId: '106874',
                customerName: 'Economou Georgia',
                balance: 9500,
                lastPayInvDate: '15/12/16',
                lastContactDate: '05/01/18',
                typeOfLastContact: '-',
                nextContactDate: '-',
                insurance: 'Private',
                ageOfEarliestUnpaidInv: 95,
                other: null,
                flag: 'yellow'
            },
            {
                customerId: '106543',
                customerName: 'Antreou Christos',
                balance: 9400,
                lastPayInvDate: '05/05/17',
                lastContactDate: '27/04/17',
                typeOfLastContact: 'Handed Invoice',
                nextContactDate: '12/12/17',
                insurance: 'CNP',
                ageOfEarliestUnpaidInv: 370,
                other: null,
                flag: null
            },
            {
                customerId: '107624',
                customerName: 'Anastasiou Maria',
                balance: 9200,
                lastPayInvDate: '07/09/17',
                lastContactDate: '-',
                typeOfLastContact: 'Paid',
                nextContactDate: '15/02/18',
                insurance: 'Private',
                ageOfEarliestUnpaidInv: 125,
                other: 'Passed Away',
                flag: 'red'
            },
            {
                customerId: '105685',
                customerName: 'Panayiotou Antreas',
                balance: 9100,
                lastPayInvDate: '05/10/16',
                lastContactDate: '-',
                typeOfLastContact: 'e/faced Invoice',
                nextContactDate: '-',
                insurance: 'Govermen.',
                ageOfEarliestUnpaidInv: null,
                other: null,
                flag: null
            },
            {
                customerId: '108586',
                customerName: 'Neophytou Antonis',
                balance: 19500,
                lastPayInvDate: '05/11/17',
                lastContactDate: '-',
                typeOfLastContact: '-',
                nextContactDate: '-',
                insurance: 'CNP',
                ageOfEarliestUnpaidInv: 360,
                other: null,
                flag: null
            },
        ],
        selectedCustomer : null
    },
    getters: {
        selectedCustomer(state){
            return state.selectedCustomer;
        }
    },
    mutations: {
        changeSelectedCustomer(state,customer){
            state.selectedCustomer = customer;
        }
    },
    actions: {
        setSelectedCustomer({state,commit},customerId){
            const id = customerId
            const customer =  state.customers_details.find((customer)=>customer.customerId === id);
            commit('changeSelectedCustomer',customer)
        }
    }
}