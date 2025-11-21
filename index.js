document.addEventListener('DOMContentLoaded', () => {
    // Theme Management
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('ph-moon');
        themeIcon.classList.add('ph-sun');
    }

    // Toggle theme
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        // Update icon
        if (isDark) {
            themeIcon.classList.remove('ph-moon');
            themeIcon.classList.add('ph-sun');
        } else {
            themeIcon.classList.remove('ph-sun');
            themeIcon.classList.add('ph-moon');
        }
        
        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // State
    const state = {
        orders: [
            { id: '59217', number: '59217342', status: 'New order', items: 1, customer: 'Cody Fisher', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59213', number: '59217343', status: 'Inproduction', items: 2, customer: 'Kristin Watson', service: 'Priority', tracking: '940010010936113003113' },
            { id: '59219', number: '59217344', status: 'Shipped', items: 12, customer: 'Esther Howard', service: 'Express', tracking: '940010010936113003113' },
            { id: '59220', number: '59217345', status: 'Canceled', items: 22, customer: 'Jenny Wilson', service: 'Express', tracking: '940010010936113003113' },
            { id: '59223', number: '59217346', status: 'Rejected', items: 32, customer: 'John Smith', service: 'Express', tracking: '940010010936113003113' },
            { id: '59282', number: '59217348', status: 'Draft', items: 41, customer: 'Cameron Williamson', service: 'Express', tracking: '940010010936113003113' },
            { id: '59283', number: '59217349', status: 'Shipped', items: 3, customer: 'Wade Warren', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59284', number: '59217350', status: 'New order', items: 1, customer: 'Bessie Cooper', service: 'Priority', tracking: '940010010936113003113' },
            { id: '59285', number: '59217351', status: 'Shipped', items: 5, customer: 'Robert Fox', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59286', number: '59217352', status: 'Inproduction', items: 2, customer: 'Floyd Miles', service: 'Express', tracking: '940010010936113003113' },
            { id: '59287', number: '59217353', status: 'Shipped', items: 8, customer: 'Ronald Richards', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59288', number: '59217354', status: 'New order', items: 1, customer: 'Albert Flores', service: 'Priority', tracking: '940010010936113003113' },
            { id: '59289', number: '59217355', status: 'Canceled', items: 1, customer: 'Eleanor Pena', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59290', number: '59217356', status: 'Shipped', items: 4, customer: 'Savannah Nguyen', service: 'Express', tracking: '940010010936113003113' },
            { id: '59291', number: '59217357', status: 'Draft', items: 2, customer: 'Marvin McKinney', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59292', number: '59217358', status: 'Shipped', items: 6, customer: 'Jerome Bell', service: 'Priority', tracking: '940010010936113003113' },
            { id: '59293', number: '59217359', status: 'New order', items: 3, customer: 'Courtney Henry', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59294', number: '59217360', status: 'Inproduction', items: 7, customer: 'Theresa Webb', service: 'Express', tracking: '940010010936113003113' },
            { id: '59295', number: '59217361', status: 'Shipped', items: 1, customer: 'Kathryn Murphy', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59296', number: '59217362', status: 'Rejected', items: 2, customer: 'Arlene McCoy', service: 'Priority', tracking: '940010010936113003113' },
            { id: '59297', number: '59217363', status: 'Shipped', items: 9, customer: 'Darrell Steward', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59298', number: '59217364', status: 'New order', items: 1, customer: 'Ralph Edwards', service: 'Express', tracking: '940010010936113003113' },
            { id: '59299', number: '59217365', status: 'Shipped', items: 4, customer: 'Gregory Lane', service: 'Standard', tracking: '940010010936113003113' },
            { id: '59300', number: '59217366', status: 'Draft', items: 2, customer: 'Jorge Murphy', service: 'Priority', tracking: '940010010936113003113' }
        ],
        invoices: [
            { id: 'INV-001', client: 'Acme Corp', date: '2023-10-25', status: 'Paid', amount: '₦1,200.00' },
            { id: 'INV-002', client: 'Globex Inc', date: '2023-10-28', status: 'Pending', amount: '₦850.00' },
            { id: 'INV-003', client: 'Soylent Corp', date: '2023-10-15', status: 'Overdue', amount: '₦2,300.00' },
            { id: 'INV-004', client: 'Initech', date: '2023-11-01', status: 'Paid', amount: '₦450.00' },
            { id: 'INV-005', client: 'Umbrella Corp', date: '2023-11-05', status: 'Pending', amount: '₦5,000.00' },
            { id: 'INV-006', client: 'Stark Ind', date: '2023-11-10', status: 'Paid', amount: '₦12,500.00' },
            { id: 'INV-007', client: 'Wayne Ent', date: '2023-11-12', status: 'Paid', amount: '₦8,400.00' },
            { id: 'INV-008', client: 'Cyberdyne', date: '2023-11-15', status: 'Pending', amount: '₦3,200.00' },
            { id: 'INV-009', client: 'Massive Dynamic', date: '2023-11-18', status: 'Paid', amount: '₦1,800.00' },
            { id: 'INV-010', client: 'Hooli', date: '2023-11-20', status: 'Overdue', amount: '₦950.00' },
            { id: 'INV-011', client: 'Pied Piper', date: '2023-11-22', status: 'Paid', amount: '₦250.00' },
            { id: 'INV-012', client: 'Aperture Sci', date: '2023-11-25', status: 'Pending', amount: '₦4,100.00' }
        ],
        cartAbandonment: [
            { customer: 'Alice Johnson', products: 'Nike Air Max, Socks', value: '₦145.00', date: '2 hrs ago', status: 'Email Sent' },
            { customer: 'Bob Smith', products: 'Wireless Headphones', value: '₦89.99', date: '5 hrs ago', status: 'Pending' },
            { customer: 'Charlie Brown', products: 'Gaming Mouse', value: '₦55.00', date: '1 day ago', status: 'Recovered' },
            { customer: 'David Wilson', products: 'Mechanical Keyboard', value: '₦120.00', date: '2 days ago', status: 'Pending' },
            { customer: 'Eva Green', products: 'Smart Watch', value: '₦250.00', date: '3 days ago', status: 'Email Sent' },
            { customer: 'Frank Castle', products: 'Tactical Vest', value: '₦85.00', date: '4 days ago', status: 'Recovered' },
            { customer: 'Grace Hopper', products: 'Laptop Stand', value: '₦45.00', date: '5 days ago', status: 'Pending' }
        ],
        listings: [
            { id: 'L-001', name: 'Wireless Noise Cancelling Headphones', sku: 'AUDIO-001', category: 'Electronics', price: '₦299.99', stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=100&auto=format&fit=crop' },
            { id: 'L-002', name: 'Ergonomic Office Chair', sku: 'FURN-023', category: 'Furniture', price: '₦199.50', stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=100&auto=format&fit=crop' },
            { id: 'L-003', name: 'Mechanical Gaming Keyboard', sku: 'TECH-104', category: 'Electronics', price: '₦129.99', stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1587829741301-dc798b91add1?q=80&w=100&auto=format&fit=crop' },
            { id: 'L-004', name: 'Smart Watch Series 5', sku: 'WEAR-005', category: 'Electronics', price: '₦349.00', stock: 8, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=100&auto=format&fit=crop' },
            { id: 'L-005', name: 'Cotton Crew Neck T-Shirt', sku: 'CLOTH-089', category: 'Clothing', price: '₦24.99', stock: 150, status: 'Active', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=100&auto=format&fit=crop' },
            { id: 'L-006', name: 'Stainless Steel Water Bottle', sku: 'HOME-012', category: 'Home', price: '₦35.00', stock: 60, status: 'Draft', image: 'https://images.unsplash.com/photo-1602143407151-01114192003f?q=80&w=100&auto=format&fit=crop' },
            { id: 'L-007', name: 'Leather Wallet', sku: 'ACC-045', category: 'Accessories', price: '₦49.99', stock: 25, status: 'Active', image: 'https://images.unsplash.com/photo-1627123424574-181ce90b594f?q=80&w=100&auto=format&fit=crop' },
            { id: 'L-008', name: '4K Monitor 27"', sku: 'TECH-202', category: 'Electronics', price: '₦450.00', stock: 5, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=100&auto=format&fit=crop' }
        ],
        admins: [
            { id: 'A-001', name: 'Elijah Scott', role: 'Super Admin', email: 'elijahscott@gmail.com', lastActive: 'Now', status: 'Active' },
            { id: 'A-002', name: 'Sarah Connor', role: 'Editor', email: 'sarah.c@acorn.com', lastActive: '2 hrs ago', status: 'Active' },
            { id: 'A-003', name: 'John Doe', role: 'Viewer', email: 'john.doe@acorn.com', lastActive: '1 day ago', status: 'Inactive' },
            { id: 'A-004', name: 'Jane Smith', role: 'Editor', email: 'jane.smith@acorn.com', lastActive: '5 mins ago', status: 'Active' },
            { id: 'A-005', name: 'Mike Ross', role: 'Viewer', email: 'mike.ross@acorn.com', lastActive: '3 days ago', status: 'Active' }
        ]
    };

    // DOM Elements
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');
    const pageTitle = document.getElementById('page-title');
    const createBtn = document.getElementById('create-btn');

    // Navigation Logic
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            
            // Update Active State
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show Target View
            viewSections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active');
            });
            
            const targetSection = document.getElementById(`view-${targetId}`);
            if (targetSection) {
                targetSection.style.display = 'block';
                setTimeout(() => targetSection.classList.add('active'), 10); // Fade in effect if added to CSS
            } else {
                // Fallback for unimplemented views
                document.getElementById('view-dashboard').style.display = 'block';
            }

            // Update Title & Button
            updateHeader(targetId);
        });
    });

    function updateHeader(targetId) {
        const titles = {
            'orders': 'Order',
            'invoices': 'Invoice Management',
            'cart-abandonment': 'Cart Abandonment',
            'dashboard': 'Dashboard',
            'listing': 'Listing',
            'admin': 'Admin',
            'settings': 'Settings'
        };
        
        pageTitle.textContent = titles[targetId] || 'Dashboard';

        // Update button text based on page
        if (targetId === 'orders') {
            createBtn.textContent = '+ Create order';
            createBtn.style.display = 'block';
        } else if (targetId === 'invoices') {
            createBtn.textContent = '+ Create invoice';
            createBtn.style.display = 'block';
        } else {
            createBtn.style.display = 'none';
        }
    }

    // Render Orders
    function renderOrders() {
        const tbody = document.getElementById('orders-table-body');
        tbody.innerHTML = state.orders.map(order => {
            const statusClass = `status-${order.status.toLowerCase().replace(' ', '-')}`;
            const serviceClass = `service-${order.service.toLowerCase()}`;
            
            return `
                <tr onclick="showOrderDetails('${order.id}')" style="cursor: pointer;">
                    <td>${order.id}</td>
                    <td>${order.number}</td>
                    <td><span class="status-badge ${statusClass}">${order.status}</span></td>
                    <td>${order.items}</td>
                    <td>${order.customer}</td>
                    <td><span class="service-dot ${serviceClass}"></span>${order.service}</td>
                    <td>${order.tracking}</td>
                    <td>
                        <button class="action-btn"><i class="ph ph-pencil-simple"></i></button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Order Details Preview
    window.showOrderDetails = (id) => {
        const order = state.orders.find(o => o.id === id);
        const sidebar = document.getElementById('order-details-sidebar');
        const preview = document.getElementById('order-preview');
        
        // Show sidebar if hidden (for desktop layout where we might want to toggle it, 
        // but here we just ensure it's visible if we clicked)
        sidebar.style.display = 'block';

        if (order) {
            preview.innerHTML = `
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="width: 80px; height: 80px; background-color: #5D4037; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: 600; margin: 0 auto 1rem auto;">
                        ${getInitials(order.customer)}
                    </div>
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">${order.customer}</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">Customer</p>
                </div>
                
                <div style="border-top: 1px solid var(--border-color); margin-bottom: 1.5rem;"></div>
                
                <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem;">
                    <p><strong style="color: var(--text-main);">Order ID:</strong> <span style="color: var(--text-secondary);">${order.id}</span></p>
                    <p><strong style="color: var(--text-main);">Items:</strong> <span style="color: var(--text-secondary);">${order.items}</span></p>
                    <p><strong style="color: var(--text-main);">Service:</strong> <span style="color: var(--text-secondary);">${order.service}</span></p>
                    <p><strong style="color: var(--text-main);">Tracking:</strong> <span style="color: var(--text-secondary);">${order.tracking}</span></p>
                </div>

                <div style="margin-top: 2rem;">
                    <button class="btn-primary" style="width: 100%; padding: 0.75rem; font-weight: 600;">View Full Profile</button>
                </div>
            `;
        }
    };

    function getInitials(name) {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    }

    // Render Invoices
    function renderInvoices() {
        const tbody = document.getElementById('invoices-table-body');
        tbody.innerHTML = state.invoices.map(inv => {
            const statusClass = `status-${inv.status.toLowerCase()}`;
            return `
                <tr onclick="showInvoiceDetails('${inv.id}')" style="cursor: pointer;">
                    <td>${inv.id}</td>
                    <td>${inv.client}</td>
                    <td>${inv.date}</td>
                    <td><span class="status-badge ${statusClass}">${inv.status}</span></td>
                    <td>${inv.amount}</td>
                    <td><button class="action-btn"><i class="ph ph-eye"></i></button></td>
                </tr>
            `;
        }).join('');
    }

    // Render Cart Abandonment
    function renderCartAbandonment() {
        const tbody = document.getElementById('cart-table-body');
        tbody.innerHTML = state.cartAbandonment.map((cart, index) => {
            let statusColor = '#6B7280';
            let statusBg = '#F3F4F6';
            
            if(cart.status === 'Email Sent') { statusColor = '#1E40AF'; statusBg = '#DBEAFE'; }
            if(cart.status === 'Recovered') { statusColor = '#065F46'; statusBg = '#D1FAE5'; }
            if(cart.status === 'Pending') { statusColor = '#92400E'; statusBg = '#FEF3C7'; }

            // Mock recovery chance
            const chance = Math.floor(Math.random() * 40) + 60; 
            let chanceColor = '#059669';
            if(chance < 70) chanceColor = '#D97706';
            if(chance < 50) chanceColor = '#DC2626';

            return `
                <tr onclick="showCartDetails(${index})" style="cursor: pointer;">
                    <td>
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <img src="https://ui-avatars.com/api/?name=${cart.customer}&background=random" style="width: 32px; height: 32px; border-radius: 50%;">
                            <span style="font-weight: 500;">${cart.customer}</span>
                        </div>
                    </td>
                    <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${cart.products}</td>
                    <td style="font-weight: 600;">${cart.value}</td>
                    <td style="color: var(--text-secondary);">${cart.date}</td>
                    <td><span class="status-badge" style="background-color: ${statusBg}; color: ${statusColor};">${cart.status}</span></td>
                    <td>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="flex: 1; height: 6px; background-color: #E5E7EB; border-radius: 3px; width: 60px;">
                                <div style="width: ${chance}%; height: 100%; background-color: ${chanceColor}; border-radius: 3px;"></div>
                            </div>
                            <span style="font-size: 0.75rem; color: var(--text-secondary);">${chance}%</span>
                        </div>
                    </td>
                    <td>
                        <button class="action-btn"><i class="ph ph-paper-plane-right"></i></button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Cart Details Preview
    window.showCartDetails = (index) => {
        const cart = state.cartAbandonment[index];
        const sidebar = document.getElementById('cart-details-sidebar');
        const preview = document.getElementById('cart-preview');
        
        sidebar.style.display = 'block';

        if (cart) {
            preview.innerHTML = `
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="width: 80px; height: 80px; background-color: #FFF7ED; color: #EA580C; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: 600; margin: 0 auto 1rem auto;">
                        <i class="ph ph-shopping-cart"></i>
                    </div>
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">${cart.customer}</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">${cart.date}</p>
                </div>
                
                <div style="border-top: 1px solid var(--border-color); margin-bottom: 1.5rem;"></div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h5 style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.75rem; text-transform: uppercase;">Items in Cart</h5>
                    <div style="background-color: #F9FAFB; padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--border-color);">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: 500;">${cart.products.split(',')[0]}</span>
                            <span>$${(parseFloat(cart.value.replace('$','')) * 0.7).toFixed(2)}</span>
                        </div>
                        ${cart.products.includes(',') ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="font-weight: 500;">${cart.products.split(',')[1]}</span>
                            <span>$${(parseFloat(cart.value.replace('$','')) * 0.3).toFixed(2)}</span>
                        </div>` : ''}
                        <div style="border-top: 1px dashed var(--border-color); margin-top: 0.5rem; padding-top: 0.5rem; display: flex; justify-content: space-between; font-weight: 700;">
                            <span>Total</span>
                            <span style="color: var(--primary-color);">${cart.value}</span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <button class="btn-primary" style="width: 100%; padding: 0.75rem; font-weight: 600;">Send Recovery Email</button>
                    <button style="width: 100%; padding: 0.75rem; font-weight: 600; background: white; border: 1px solid var(--border-color); border-radius: 0.375rem; color: var(--text-secondary); cursor: pointer;">View Customer Profile</button>
                </div>
            `;
        }
    };

    // Invoice Details Preview
    window.showInvoiceDetails = (id) => {
        const invoice = state.invoices.find(i => i.id === id);
        const sidebar = document.getElementById('invoice-details-sidebar');
        const preview = document.getElementById('invoice-preview');
        
        sidebar.style.display = 'block';

        if (invoice) {
            const statusClass = `status-${invoice.status.toLowerCase()}`;
            preview.innerHTML = `
                <div style="text-align: center; margin-bottom: 2rem;">
                    <div style="width: 80px; height: 80px; background-color: #E0F2F1; color: #00695C; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: 600; margin: 0 auto 1rem auto;">
                        <i class="ph ph-receipt"></i>
                    </div>
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">${invoice.client}</h4>
                    <span class="status-badge ${statusClass}" style="margin-top: 0.5rem;">${invoice.status}</span>
                </div>
                
                <div style="border-top: 1px solid var(--border-color); margin-bottom: 1.5rem;"></div>
                
                <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.95rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">Invoice ID:</strong> 
                        <span style="color: var(--text-secondary);">${invoice.id}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">Date Issued:</strong> 
                        <span style="color: var(--text-secondary);">${invoice.date}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">Due Date:</strong> 
                        <span style="color: var(--text-secondary);">Within 30 Days</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-color);">
                        <strong style="color: var(--text-main); font-size: 1.1rem;">Total Amount:</strong> 
                        <span style="color: var(--primary-color); font-weight: 700; font-size: 1.1rem;">${invoice.amount}</span>
                    </div>
                </div>

                <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem;">
                    <button class="btn-primary" style="width: 100%; padding: 0.75rem; font-weight: 600;">Download PDF</button>
                    <button style="width: 100%; padding: 0.75rem; font-weight: 600; background: white; border: 1px solid var(--border-color); border-radius: 0.375rem; color: var(--text-secondary); cursor: pointer;">Send Reminder</button>
                </div>
            `;
        }
    };

    // Render Listings
    function renderListings() {
        const tbody = document.getElementById('listing-table-body');
        tbody.innerHTML = state.listings.map((item, index) => {
            let statusColor = '#6B7280';
            let statusBg = '#F3F4F6';
            
            if(item.status === 'Active') { statusColor = '#059669'; statusBg = '#D1FAE5'; }
            if(item.status === 'Out of Stock') { statusColor = '#DC2626'; statusBg = '#FEE2E2'; }
            if(item.status === 'Low Stock') { statusColor = '#D97706'; statusBg = '#FEF3C7'; }
            if(item.status === 'Draft') { statusColor = '#374151'; statusBg = '#F3F4F6'; }

            return `
                <tr onclick="showListingDetails(${index})" style="cursor: pointer;">
                    <td>
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <img src="${item.image}" style="width: 40px; height: 40px; border-radius: 0.375rem; object-fit: cover;">
                            <span style="font-weight: 500;">${item.name}</span>
                        </div>
                    </td>
                    <td style="color: var(--text-secondary);">${item.sku}</td>
                    <td>${item.category}</td>
                    <td style="font-weight: 600;">${item.price}</td>
                    <td>${item.stock}</td>
                    <td><span class="status-badge" style="background-color: ${statusBg}; color: ${statusColor};">${item.status}</span></td>
                    <td>
                        <button class="action-btn"><i class="ph ph-pencil-simple"></i></button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Listing Details Preview
    window.showListingDetails = (index) => {
        const item = state.listings[index];
        const sidebar = document.getElementById('listing-details-sidebar');
        const preview = document.getElementById('listing-preview');
        
        sidebar.style.display = 'block';

        if (item) {
            let statusColor = '#6B7280';
            let statusBg = '#F3F4F6';
            if(item.status === 'Active') { statusColor = '#059669'; statusBg = '#D1FAE5'; }
            if(item.status === 'Out of Stock') { statusColor = '#DC2626'; statusBg = '#FEE2E2'; }
            if(item.status === 'Low Stock') { statusColor = '#D97706'; statusBg = '#FEF3C7'; }
            if(item.status === 'Draft') { statusColor = '#374151'; statusBg = '#F3F4F6'; }

            preview.innerHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <img src="${item.image}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${item.name}</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 1.25rem; font-weight: 700; color: var(--text-main);">${item.price}</span>
                        <span class="status-badge" style="background-color: ${statusBg}; color: ${statusColor};">${item.status}</span>
                    </div>
                </div>
                
                <div style="border-top: 1px solid var(--border-color); margin-bottom: 1.5rem;"></div>
                
                <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.95rem; margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">SKU:</strong> 
                        <span style="color: var(--text-secondary);">${item.sku}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">Category:</strong> 
                        <span style="color: var(--text-secondary);">${item.category}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">Stock Quantity:</strong> 
                        <span style="color: var(--text-secondary);">${item.stock} units</span>
                    </div>
                </div>

                <div style="background-color: #F9FAFB; padding: 1rem; border-radius: 0.5rem; margin-bottom: 2rem;">
                    <h5 style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem;">Sales Performance</h5>
                    <div style="display: flex; gap: 1rem;">
                        <div style="flex: 1;">
                            <span style="display: block; font-size: 0.75rem; color: var(--text-secondary);">Total Sold</span>
                            <span style="font-weight: 600;">${Math.floor(Math.random() * 500)}</span>
                        </div>
                        <div style="flex: 1;">
                            <span style="display: block; font-size: 0.75rem; color: var(--text-secondary);">Revenue</span>
                            <span style="font-weight: 600;">$${(Math.random() * 15000).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 0.75rem;">
                    <button class="btn-primary" style="flex: 1; padding: 0.75rem; font-weight: 600;">Edit Listing</button>
                    <button style="padding: 0.75rem; font-weight: 600; background: white; border: 1px solid #EF4444; border-radius: 0.375rem; color: #EF4444; cursor: pointer;"><i class="ph ph-trash"></i></button>
                </div>
            `;
        }
    };

    // Render Admins
    function renderAdmins() {
        const tbody = document.getElementById('admin-table-body');
        tbody.innerHTML = state.admins.map((admin, index) => {
            let statusColor = '#6B7280';
            let statusBg = '#F3F4F6';
            
            if(admin.status === 'Active') { statusColor = '#059669'; statusBg = '#D1FAE5'; }
            if(admin.status === 'Inactive') { statusColor = '#DC2626'; statusBg = '#FEE2E2'; }

            return `
                <tr onclick="showAdminDetails(${index})" style="cursor: pointer;">
                    <td>
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <img src="https://ui-avatars.com/api/?name=${admin.name}&background=random" style="width: 32px; height: 32px; border-radius: 50%;">
                            <span style="font-weight: 500;">${admin.name}</span>
                        </div>
                    </td>
                    <td>${admin.role}</td>
                    <td style="color: var(--text-secondary);">${admin.email}</td>
                    <td>${admin.lastActive}</td>
                    <td><span class="status-badge" style="background-color: ${statusBg}; color: ${statusColor};">${admin.status}</span></td>
                    <td>
                        <button class="action-btn"><i class="ph ph-dots-three-vertical"></i></button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // Admin Details Preview
    window.showAdminDetails = (index) => {
        const admin = state.admins[index];
        const sidebar = document.getElementById('admin-details-sidebar');
        const preview = document.getElementById('admin-preview');
        
        sidebar.style.display = 'block';

        if (admin) {
            let statusColor = '#6B7280';
            let statusBg = '#F3F4F6';
            if(admin.status === 'Active') { statusColor = '#059669'; statusBg = '#D1FAE5'; }
            if(admin.status === 'Inactive') { statusColor = '#DC2626'; statusBg = '#FEE2E2'; }

            preview.innerHTML = `
                <div style="text-align: center; margin-bottom: 2rem;">
                    <img src="https://ui-avatars.com/api/?name=${admin.name}&background=random" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 1rem;">
                    <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">${admin.name}</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">${admin.role}</p>
                    <span class="status-badge" style="background-color: ${statusBg}; color: ${statusColor}; margin-top: 0.5rem;">${admin.status}</span>
                </div>
                
                <div style="border-top: 1px solid var(--border-color); margin-bottom: 1.5rem;"></div>
                
                <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.95rem; margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">Email:</strong> 
                        <span style="color: var(--text-secondary);">${admin.email}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">Last Active:</strong> 
                        <span style="color: var(--text-secondary);">${admin.lastActive}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <strong style="color: var(--text-main);">Permissions:</strong> 
                        <span style="color: var(--text-secondary);">${admin.role === 'Super Admin' ? 'Full Access' : 'Limited Access'}</span>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                    <button class="btn-primary" style="width: 100%; padding: 0.75rem; font-weight: 600;">Edit Profile</button>
                    <button style="width: 100%; padding: 0.75rem; font-weight: 600; background: white; border: 1px solid #EF4444; border-radius: 0.375rem; color: #EF4444; cursor: pointer;">Deactivate User</button>
                </div>
            `;
        }
    };

    // Settings Tab Switcher
    window.switchSettingsTab = (tabName) => {
        // Update sidebar active state
        document.querySelectorAll('.settings-nav-item').forEach(item => {
            item.classList.remove('active');
            if(item.innerText.toLowerCase().includes(tabName)) {
                item.classList.add('active');
            }
        });

        // Update content visibility
        document.querySelectorAll('.settings-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const activeContent = document.getElementById(`settings-${tabName}`);
        if(activeContent) {
            activeContent.classList.add('active');
        }
    };

    // Render Dashboard Overview
    function renderDashboard() {
        // 1. Calculate Stats
        const totalOrders = state.orders.length;
        const totalRevenue = state.invoices
            .filter(inv => inv.status === 'Paid')
            .reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[^0-9.-]+/g,"")), 0);
        const pendingInvoicesCount = state.invoices.filter(inv => inv.status === 'Pending').length;
        const abandonedValue = state.cartAbandonment
            .reduce((sum, cart) => sum + parseFloat(cart.value.replace(/[^0-9.-]+/g,"")), 0);

        // Update DOM
        document.getElementById('total-orders').textContent = totalOrders;
        document.getElementById('total-revenue').textContent = '₦' + totalRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('pending-invoices').textContent = pendingInvoicesCount;
        document.getElementById('abandoned-value').textContent = '₦' + abandonedValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

        // 2. Render Recent Orders Table
        const recentOrders = state.orders.slice(0, 5);
        const tbody = document.getElementById('dashboard-orders-body');
        if (tbody) {
            tbody.innerHTML = recentOrders.map(order => {
                const statusClass = `status-${order.status.toLowerCase().replace(' ', '-')}`;
                // Mock amount for orders since it wasn't in original data
                const mockAmount = '₦' + (Math.random() * 200 + 50).toFixed(2);
                return `
                    <tr>
                        <td>${order.id}</td>
                        <td>${order.customer}</td>
                        <td><span class="status-badge ${statusClass}">${order.status}</span></td>
                        <td>${mockAmount}</td>
                    </tr>
                `;
            }).join('');
        }

        // 3. Render Charts (if Chart.js is loaded)
        if (typeof Chart !== 'undefined') {
            // Revenue Chart
            const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
            new Chart(ctxRevenue, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Revenue',
                        data: [12000, 19000, 3000, 5000, 2000, 3000, 7000, 15000, 21000, 18000, 25000, 29000],
                        borderColor: '#F97316',
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { beginAtZero: true, grid: { borderDash: [2, 4] } },
                        x: { grid: { display: false } }
                    }
                }
            });

            // Status Chart
            const ctxStatus = document.getElementById('statusChart').getContext('2d');
            const statusCounts = {};
            state.orders.forEach(o => {
                statusCounts[o.status] = (statusCounts[o.status] || 0) + 1;
            });

            new Chart(ctxStatus, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(statusCounts),
                    datasets: [{
                        data: Object.values(statusCounts),
                        backgroundColor: [
                            '#DBEAFE', '#FEF3C7', '#D1FAE5', '#FEE2E2', '#F3F4F6', '#E5E7EB'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8 } }
                    }
                }
            });
        }
    }

    // Sidebar Collapse Logic
    const sidebar = document.getElementById('sidebar');
    const collapseBtn = document.getElementById('collapse-btn');
    
    if (collapseBtn) {
        collapseBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }

    // Initialize
    renderOrders();
    renderInvoices();
    renderCartAbandonment();
    renderListings();
    renderAdmins();
    renderDashboard();
});
