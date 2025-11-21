# Acorn E-commerce Dashboard

A modern, feature-rich e-commerce dashboard built with vanilla HTML, CSS, and JavaScript. This comprehensive admin panel provides merchants with powerful tools to manage their online store, track analytics, and engage with their community.

![Acorn Dashboard](assets/Order%20management.png)

## 🌟 Features

### Dashboard Overview
- **Real-time Statistics**: Track Total Revenue, Orders, Pending Invoices, and Cart Abandonment
- **Interactive Charts**: Revenue overview and order status visualizations using Chart.js
- **Recent Orders Table**: Quick access to the latest customer orders

### Order Management
- **Comprehensive Order Listing**: View all orders with detailed information
- **Smart Filtering**: Filter by status (All, Pending, Shipped, Canceled)
- **Search Functionality**: Search by Order ID or Customer name
- **Order Details Sidebar**: Sticky sidebar showing customer information and order details
- **Pagination Controls**: Navigate through large order lists efficiently

### Invoice Management
- **Invoice Tracking**: Monitor all invoices with status indicators (Paid, Pending, Overdue)
- **Invoice Preview**: Detailed invoice view with download and reminder options
- **Advanced Filters**: Filter by status and search by Invoice ID or Client
- **Organized Table View**: Clean presentation of invoice data

### Cart Abandonment Recovery
- **Abandoned Cart Monitoring**: Track customers who left items in their cart
- **Recovery Metrics**: Visual recovery chance indicators with progress bars
- **Customer Details**: Quick access to customer information and cart contents
- **Email Recovery**: Built-in email sending functionality to recover lost sales

### Product Listing
- **Inventory Management**: Complete product catalog with stock tracking
- **Category Organization**: Filter products by category
- **Status Indicators**: Active, Out of Stock, Low Stock, and Draft states
- **Product Details**: Comprehensive product information with sales performance

### Admin Management
- **User Administration**: Manage admin users and their permissions
- **Role-Based Access**: Super Admin, Editor, and Viewer roles
- **Activity Tracking**: Monitor last active status for all admins
- **User Status Management**: Active/Inactive user states

### Settings Panel
- **Profile Management**: Update personal information and profile photo
- **Notification Preferences**: Toggle email, push, and order notifications
- **Security Settings**: Change password and enable two-factor authentication
- **Billing & Subscription**: Manage payment methods, view billing history, and subscription details

### Community Hub
- **Discussion Forum**: Share experiences and ask questions
- **Active Members**: See who's online in real-time
- **Topic Tags**: Browse discussions by category (Inventory, Shipping, Marketing, etc.)
- **Post Creation**: Share updates and engage with the community

### Tutorial Center
- **Video Library**: Comprehensive video tutorials on all platform features
- **Category Filtering**: Browse by topic (Getting Started, Orders, Inventory, Marketing, Analytics)
- **Interactive Cards**: Engaging video cards with hover effects
- **View Counts & Duration**: Track popular content and time investment

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Micro-interactions**: Subtle hover effects and transitions throughout
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Collapsible Sidebar**: Maximize workspace with expandable navigation
- **Consistent Design System**: Unified color scheme and typography
- **Accessibility**: Semantic HTML and keyboard-friendly navigation

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with CSS Variables, Flexbox, and Grid
- **JavaScript (ES6+)**: Dynamic content rendering and interactivity
- **Chart.js**: Beautiful, responsive charts for data visualization
- **Phosphor Icons**: Elegant icon library for consistent iconography
- **Google Fonts**: Lato and Montserrat for professional typography

## 📁 Project Structure

```
E-commerce_dashboard/
├── index.html          # Main HTML structure
├── style.css           # Global styles and component styling
├── index.js            # JavaScript functionality and data management
├── assets/
│   ├── Logo.png        # Brand logo
│   ├── Favicon.png     # Browser tab icon
│   └── vuesax/
│       └── linear/
│           └── sidebar-left.svg  # Sidebar collapse icon
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BrightDev10-Cloud/Acorn-Ecommerce-Dashboard.git
   cd Acorn-Ecommerce-Dashboard
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Start exploring!**
   - Navigate through different tabs using the sidebar
   - Interact with tables, charts, and filters
   - Test responsive design by resizing your browser

## 💡 Usage

### Navigation
- Use the **sidebar** to switch between different sections
- Click the **collapse button** to maximize workspace
- Access **Settings** for profile and notification preferences
- Use **Logout** button to end your session

### Data Management
- Click on any **table row** to view detailed information in the sidebar
- Use **filter tabs** to quickly sort data by status
- **Search bars** allow you to find specific orders, invoices, or products
- Navigate large datasets with **pagination controls**

### Customization
- All mock data is stored in the `state` object in `index.js`
- Modify CSS variables in `:root` for theme customization
- Charts can be configured in the `renderDashboard()` function

## 🎯 Key Highlights

- **Zero Dependencies**: Runs entirely in the browser, no npm packages needed
- **Lightweight**: Fast loading times with optimized assets
- **Maintainable**: Clean, well-commented code structure
- **Extensible**: Easy to add new features or integrate with backend APIs
- **Professional**: Production-ready UI suitable for real-world applications

## 🔮 Future Enhancements

- [ ] Backend API integration for live data
- [ ] Real-time notifications using WebSockets
- [ ] Advanced analytics with custom date ranges
- [ ] Export functionality for reports and invoices
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme toggle
- [ ] Drag-and-drop product management
- [ ] File upload for product images
- [ ] Role-based authentication system

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**BrightDev10-Cloud**
- GitHub: [@BrightDev10-Cloud](https://github.com/BrightDev10-Cloud)

## 🙏 Acknowledgments

- Design inspired by modern e-commerce platforms
- Icons by [Phosphor Icons](https://phosphoricons.com/)
- Charts powered by [Chart.js](https://www.chartjs.org/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

⭐ If you find this project helpful, please consider giving it a star on GitHub!
