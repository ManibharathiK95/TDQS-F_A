const APP_DATA = {
    company: {
        name: "Thulir Design & QS Services FZE",
        short: "TDQS",
        page: "Accounts and Finance"
    },

    kpi: {
        revenue: 18500,
        expenses: 7200,
        netProfit: 11300,
        cashAvailable: 25000,
        outstandingRevenue: 45000,
        outstandingReceivable: 32000,
        outstandingPayable: 12000,
        cashBalance: 25000
    },

    cashFlow: {
        opening: 20000,
        received: 18500,
        vendorPayments: 5000,
        otherExpenses: 2200,
        get closing() { return this.opening + this.received - this.vendorPayments - this.otherExpenses; }
    },

    monthlyRevenue: {
        labels: ['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'],
        values: [15000, 18000, 12000, 18500, 0, 0, 0, 0, 0, 0, 0, 0],
        get total() { return this.values.reduce((a,b) => a+b, 0); },
        get average() { return Math.round(this.total / 12); }
    },

    projects: [
        { name: "Dubai Villa", contractor: "ABC Construction", progress: 80, status: "In Progress", value: 150000, remarks: "Invoice Pending" },
        { name: "Marina Tower Fit-out", contractor: "XYZ Builders", progress: 100, status: "Completed", value: 500000, remarks: "Completed & Paid" },
        { name: "JBR Apartment", contractor: "Delta Group", progress: 40, status: "In Progress", value: 80000, remarks: "Payment Pending" },
        { name: "Downtown Office", contractor: "SkyHigh LLC", progress: 0, status: "Not Yet Started", value: 200000, remarks: "Invoice Pending" },
        { name: "Palm Jumeirah Renovation", contractor: "Coastline Con.", progress: 20, status: "In Progress", value: 45000, remarks: "Invoice Submitted" }
    ],

    receivables: [
        { contractor: "ABC Construction", amount: 12000 },
        { contractor: "XYZ Builders", amount: 20000 }
    ],
    get totalReceivable() { return this.receivables.reduce((a,b) => a + b.amount, 0); },

    payables: [
        { vendor: "Al Futtaim Supplies", amount: 5000 },
        { vendor: "Emirates Hardware LLC", amount: 7000 }
    ],
    get totalPayable() { return this.payables.reduce((a,b) => a + b.amount, 0); },

    activities: [
        { date: "29-Jul-2026", text: "Invoice INV-105 created" },
        { date: "29-Jul-2026", text: "Payment received AED 5,000" },
        { date: "29-Jul-2026", text: "Vendor payment made AED 1,200" },
        { date: "28-Jul-2026", text: "New quotation sent to Coastline Con." },
        { date: "28-Jul-2026", text: "New project added: Downtown Office" }
    ]
};

function formatAED(amount) {
    return "AED " + amount.toLocaleString();
}
