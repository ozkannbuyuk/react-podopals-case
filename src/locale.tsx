import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        customers: "Customers",
        dashboard: "Dashboard",
        notFoundMsg: "Page Not Found!",
        backToHome: "Back to Main Page",
        products: "Products",
        name: "Name",
        email: "Email",
        phone: "Phone",
        address: "Address",
        product: "Product",
        sku: "SKU",
        stock: "Stock",
        price: "Price",
        actions: "Actions",
        Jan: "Jan",
        Feb: "Feb",
        Mar: "Mar",
        Apr: "Apr",
        May: "May",
        Jun: "Jun",
        July: "July",
        Aug: "Aug",
        Sep: "Sep",
        Oct: "Oct",
        Nov: "Nov",
        Dec: "Dec",
        customer: "Customer",
        totalOrders: "Total Orders",
        totalSpending: "Total Spending",
        orderID: "Order ID",
        totalPrice: "Total Price",
        date: "Date",
        status: "Status",
        approved: "Approved",
        pending: "Pending",
        rejected: "Rejected",
        ozkanBuyuk: "Özkan Büyük",
        errorMessage: "Please enter 'admin' in User Name box",
        login: "Login",
        forgetPass: "Forget your password?",
        summaryOfOrders: "Chart Of Order",
        summaryOfRevenue: "Chart Of Revenue",
        quickAnalysis: "Quick Analysis",
        thisMonthSales: "This Month Sales",
        thisMonthOrders: "This Month Orders",
        thisMonthRevenue: "This Month Revenue",
        salesAmount: "1,453",
        orderAmount: "2000",
        revenueAmount: "4,500",
        topCustomers: "Top Customers",
        viewAll: "View All",
        latestTransaction: "Latest Transactions",
        logout: "Logout",
      },
    },
    tr: {
      translation: {
        customers: "Müşteriler",
        dashboard: "Panel",
        notFoundMsg: "Sayfa Bulunamadı!",
        backToHome: "Ana Sayfaya Dön",
        products: "Ürünler",
        name: "Ad - Soyad",
        email: "Email",
        phone: "Telefon",
        address: "Adres",
        product: "Ürün",
        sku: "SKU",
        stock: "Stok",
        price: "Fiyat",
        actions: "İşlemler",
        Jan: "Oca",
        Feb: "Şub",
        Mar: "Mar",
        Apr: "Nis",
        May: "May",
        Jun: "Haz",
        July: "Tem",
        Aug: "Ağu",
        Sep: "Eyl",
        Oct: "Eki",
        Nov: "Kas",
        Dec: "Ara",
        customer: "Müşteri",
        totalOrders: "Toplam Sipariş",
        totalSpending: "Toplam Tutar",
        orderID: "Sipariş ID",
        totalPrice: "Toplam Tutar",
        date: "Tarih",
        status: "Durum",
        approved: "Onaylandı",
        pending: "Beklemede",
        rejected: "Reddedildi",
        ozkanBuyuk: "Özkan Büyük",
        errorMessage: "Lütfen Kullanıcı Adı kutusuna 'admin' yazın",
        login: "Giriş Yap",
        forgetPass: "Şifrenizi mi unuttunuz?",
        summaryOfOrders: "Sipariş Grafiği",
        summaryOfRevenue: "Gelir Grafiği",
        quickAnalysis: "Hızlı Analiz",
        thisMonthSales: "Bu Ay Toplam Satış",
        thisMonthOrders: "Bu Ay Toplam Sipariş",
        thisMonthRevenue: "Bu Ay Toplam Kazanç",
        salesAmount: "1,453",
        orderAmount: "2000",
        revenueAmount: "4,500",
        topCustomers: "En İyi Müşteriler",
        viewAll: "Hepsini Gör",
        latestTransaction: "Son İşlemler",
        logout: "Çıkış Yap",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;