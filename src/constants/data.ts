const data = {
  revenueByMonths: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    data: [300, 250, 350, 320, 140, 280, 370, 230, 240, 160, 300, 400],
  },
  topCustomers: {
    head: ["customer", "totalOrders", "totalSpending"],
    body: [
      {
        username: "Sarah Adams",
        order: 530,
        price: "$17,800",
      },
      {
        username: "David Smith",
        order: 290,
        price: "$14,200",
      },
      {
        username: "Michael Brown",
        order: 150,
        price: "$12,600",
      },
      {
        username: "Emma Davis",
        order: 130,
        price: "$10,900",
      },
      {
        username: "Christopher Wilson",
        order: 110,
        price: "$9,500",
      },
    ],
  },
  latestOrders: {
    header: ["orderID", "customer", "totalPrice", "date", "status"],
    body: [
      {
        orderId: "#OD2123",
        customer: "Sarah Adams",
        totalPrice: "$920",
        date: "20 Mar 2024",
        status: "approved",
      },
      {
        orderId: "#OD2124",
        customer: "David Smith",
        totalPrice: "$460",
        date: "3 Mar 2024",
        status: "pending",
      },
      {
        orderId: "#OD2125",
        customer: "Michael Brown",
        totalPrice: "$240",
        date: "12 Mar 2024",
        status: "approved",
      },
      {
        orderId: "#OD2126",
        customer: "Emma Davis",
        totalPrice: "$420",
        date: "7 Mar 2024",
        status: "rejected",
      },
      {
        orderId: "#OD2127",
        customer: "Christopher Wilson",
        totalPrice: "$180",
        date: "15 Mar 2024",
        status: "approved",
      },
    ],
  },
};

export default data;
