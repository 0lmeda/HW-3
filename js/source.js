$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    const usernameContainer = $('#username');
    usernameContainer.append(username);

    const revenueContaienr = $(".revenue-amt");
    revenueContaienr.append(revenueAmt);

    const customerContainer = $('#customer-num');
    customerContainer.append(customerNum);

    const ordersContainer =  $('#orders-amt');
    ordersContainer.append(ordersAmt);

    const issuesContainer = $('#issues-amt');
    issuesContainer.append(issuesAmt);

    const taskNum = $('#notification-num');
    taskNum.append(notifAmt)
    
    const salesTable = $('#salesTableBody');
    sales.forEach(item =>{
        salesTable.append(`
            <tr>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.revenue}</td>
            </tr>
            `);


    });

    const activityList = $('#activity-list');
    activities.forEach(item =>{
        activityList.append(`<li>${item.message} </li>`)






    });
//the class doesnt work because status is capatilized and the class name is not.
    const customerTable = $('#customerTableBody');
    customers.forEach(item =>{
        customerTable.append(`
                <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                
                <td><span class="status status-${item.status.toLocaleLowerCase()}">${item.status}</span></td>
                <td>${item.joined}</td>
                </tr>
            `);


    });

    const systemList = $('#system-status-list');
    messages.forEach(item=>{

        systemList.append(`<li>${item.messsage}</li>`);
    });


    const notificationList = $('#notifications-list');
    notifications.forEach(item=>{
        notificationList.append(`<li>${item.messsage}</li>`);
    });

    const tasksList = $('#tasks-list');
    tasks.forEach(item=>{
        tasksList.append(`<li>${item.messsage}</li>`);

    });

    $('button').button();

    $('#dashboardTabs').tabs();

    $('#customerDialog').dialog({
        autoOpen: false,
        modal: true,
        width: 450,

        buttons: {
            "Create Customer": function () {

                var name = $("#customerName").val();
                var email = $("#customerEmail").val();

                if (!name || !email) {
                    alert("Please enter a name and email.");
                    return;
                }

                alert("Customer created: " + name);

                $(this).dialog("close");
            },

            "Cancel": function () {
                $(this).dialog("close");
            }
        }

    });

    $('#accordion').accordion({
        collapsible: true,
        heightStyle: "content"
    });

    $('#newCustomerButton').click(function(){
        $('#customerDialog').dialog('open');
    });

    $('#customerDate').datepicker();


    });

