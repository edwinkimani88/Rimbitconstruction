<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rimbit Construction Limited — Business Management Portal</title>
  <link rel="shortcut icon" type="image/x-icon" href="images/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/all.min.css" rel="stylesheet">
  <style>
    :root {
      --primary: #12223b;
      --primary-dark: #0a1525;
      --accent: #eaa011;
      --accent-hover: #d48e0b;
      --bg: #f1f5f9;
      --card-bg: #ffffff;
      --border: #e2e8f0;
      --text: #1e293b;
      --text-muted: #64748b;
    }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .admin-navbar {
      background: var(--primary);
      padding: 14px 28px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .admin-brand {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
      color: #fff;
    }
    .admin-brand img {
      height: 44px;
      background: #fff;
      padding: 4px 8px;
      border-radius: 6px;
    }
    .admin-badge {
      background: var(--accent);
      color: var(--primary);
      font-size: 11px;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .stat-card {
      background: #fff;
      border-radius: 14px;
      padding: 20px;
      border: 1px solid var(--border);
      box-shadow: 0 2px 10px rgba(0,0,0,0.03);
    }
    .stat-card .icon {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: rgba(234, 160, 17, 0.15);
      color: var(--accent);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .stat-value {
      font-size: 26px;
      font-weight: 800;
      color: var(--primary);
      margin: 8px 0 2px;
    }
    .content-card {
      background: #fff;
      border-radius: 16px;
      border: 1px solid var(--border);
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      padding: 24px;
      margin-bottom: 30px;
    }
    .table th {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-muted);
      border-top: none;
      background: #f8fafc;
      padding: 12px 16px;
    }
    .table td {
      padding: 14px 16px;
      vertical-align: middle;
      font-size: 14px;
    }
    .badge-status {
      font-size: 11px;
      font-weight: 700;
      padding: 5px 10px;
      border-radius: 50px;
      display: inline-block;
    }
    .badge-Available { background: #dcfce7; color: #166534; }
    .badge-AvailableOnDemand { background: #e0f2fe; color: #075985; }
    .badge-SupplierAvailable { background: #ccfbf1; color: #115e59; }
    .badge-PriceOnRequest { background: #fef3c7; color: #92400e; }
    .badge-NeedToConfirm { background: #ede9fe; color: #5b21b6; }
    .badge-TemporarilyUnavailable { background: #f3f4f6; color: #4b5563; }
    .btn-ribit {
      background: var(--primary);
      color: #fff;
      font-weight: 600;
      border-radius: 8px;
      padding: 8px 16px;
      border: none;
      transition: all 0.2s ease;
    }
    .btn-ribit:hover {
      background: var(--accent);
      color: var(--primary);
    }
    .nav-tabs .nav-link {
      font-weight: 600;
      color: var(--text-muted);
      border: none;
      border-bottom: 2px solid transparent;
      padding: 12px 20px;
    }
    .nav-tabs .nav-link.active {
      color: var(--primary);
      border-bottom: 2px solid var(--accent);
      background: transparent;
    }
  </style>
</head>
<body>

  <!-- Top Admin Bar -->
  <header class="admin-navbar">
    <a href="manage.html" class="admin-brand">
      <img src="assets/Ribit Logo.png" alt="Rimbit Construction Limited">
      <div>
        <div style="font-weight: 800; font-size: 17px; line-height: 1.2;">Rimbit Construction</div>
        <div style="font-size: 11px; color: #94a3b8;">Business Data & Catalogue Management</div>
      </div>
      <span class="admin-badge ms-2">Live Portal</span>
    </a>
    <div class="d-flex align-items-center gap-3">
      <a href="index.html" class="btn btn-sm btn-outline-light rounded-pill px-3" target="_blank">
        <i class="fa-solid fa-arrow-up-right-from-square me-1"></i> View Live Website
      </a>
      <button class="btn btn-sm btn-warning rounded-pill px-3 fw-bold text-dark" onclick="openProductModal()">
        <i class="fa-solid fa-plus me-1"></i> Add Product
      </button>
    </div>
  </header>

  <main class="container-fluid px-4 py-4 flex-grow-1">
    <!-- Top Stats Row -->
    <div class="row g-3 mb-4">
      <div class="col-md-3">
        <div class="stat-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="text-muted small">Total Materials</div>
              <div class="stat-value" id="statTotalProducts">--</div>
            </div>
            <div class="icon"><i class="fa-solid fa-boxes-stacked"></i></div>
          </div>
          <div class="small text-muted mt-2">Active in Rimbit catalogue</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="stat-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="text-muted small">Available for Dispatch</div>
              <div class="stat-value text-success" id="statInStock">--</div>
            </div>
            <div class="icon" style="background: rgba(16, 185, 129, 0.15); color: #10b981;"><i class="fa-solid fa-truck-ramp-box"></i></div>
          </div>
          <div class="small text-muted mt-2">Ready for immediate site drop</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="stat-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="text-muted small">On-Demand & Quarry Direct</div>
              <div class="stat-value text-info" id="statOnDemand">--</div>
            </div>
            <div class="icon" style="background: rgba(2, 132, 199, 0.15); color: #0284c7;"><i class="fa-solid fa-dolly"></i></div>
          </div>
          <div class="small text-muted mt-2">Sand, ballast, stone & bulk rebar</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="stat-card">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="text-muted small">Quote Inquiries</div>
              <div class="stat-value text-warning" id="statQuotes">--</div>
            </div>
            <div class="icon" style="background: rgba(234, 160, 17, 0.15); color: #d97706;"><i class="fa-solid fa-file-invoice-dollar"></i></div>
          </div>
          <div class="small text-muted mt-2">Pending contractor requests</div>
        </div>
      </div>
    </div>

    <!-- Tabbed Management Section -->
    <div class="content-card">
      <ul class="nav nav-tabs mb-4" id="adminTabs" role="tablist">
        <li class="nav-item">
          <button class="nav-link active" id="products-tab" data-bs-toggle="tab" data-bs-target="#productsTab" type="button">
            <i class="fa-solid fa-layer-group me-2"></i>Product Catalogue
          </button>
        </li>
        <li class="nav-item">
          <button class="nav-link" id="quotes-tab" data-bs-toggle="tab" data-bs-target="#quotesTab" type="button">
            <i class="fa-solid fa-clipboard-list me-2"></i>Customer Quotations (<span id="quotesCountBadge">0</span>)
          </button>
        </li>
      </ul>

      <div class="tab-content" id="adminTabsContent">
        <!-- Products Tab -->
        <div class="tab-pane fade show active" id="productsTab">
          <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <div class="d-flex gap-2">
              <input type="text" class="form-control form-control-sm" id="adminSearchInput" placeholder="Filter by name or category..." style="width: 280px;" oninput="filterAdminProducts()">
              <select class="form-select form-select-sm" id="adminCategorySelect" style="width: 200px;" onchange="filterAdminProducts()">
                <option value="all">All Categories</option>
              </select>
            </div>
            <button class="btn btn-sm btn-primary" onclick="openProductModal()">
              <i class="fa-solid fa-plus me-1"></i> Add Material
            </button>
          </div>

          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th style="width: 60px;">Image</th>
                  <th>Material Name</th>
                  <th>Category</th>
                  <th>Unit</th>
                  <th>Price / Rate</th>
                  <th>Availability</th>
                  <th>Website Status</th>
                  <th style="width: 130px; text-align: right;">Actions</th>
                </tr>
              </thead>
              <tbody id="adminProductsTable">
                <tr>
                  <td colspan="8" class="text-center py-4 text-muted">
                    <i class="fa-solid fa-spinner fa-spin me-2"></i> Loading catalogue...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Quotes Tab -->
        <div class="tab-pane fade" id="quotesTab">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="mb-0 fw-bold" style="color: var(--primary);">Incoming Material Quotations</h5>
            <button class="btn btn-sm btn-outline-secondary" onclick="loadQuotes()">
              <i class="fa-solid fa-rotate-right me-1"></i> Refresh
            </button>
          </div>

          <div class="table-responsive">
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Quote Ref</th>
                  <th>Date</th>
                  <th>Client / Contractor</th>
                  <th>Contact</th>
                  <th>Site Location</th>
                  <th>Requested Items</th>
                  <th>Status</th>
                  <th style="text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody id="adminQuotesTable">
                <tr>
                  <td colspan="8" class="text-center py-4 text-muted">No quote inquiries loaded.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Edit / Add Product Modal -->
  <div class="modal fade" id="productModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <form id="productForm" onsubmit="saveProduct(event)">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="productModalTitle">Add Construction Material</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body p-4">
            <input type="hidden" id="formProductId">
            <div class="row g-3">
              <div class="col-md-8">
                <label class="form-label fw-bold small">Product / Material Name*</label>
                <input type="text" class="form-control" id="formProductName" required placeholder="e.g. Bamburi Tembo Cement (CEM II 32.5R)">
              </div>
              <div class="col-md-4">
                <label class="form-label fw-bold small">Category*</label>
                <select class="form-select" id="formProductCategory" required>
                  <option value="Cement">Cement</option>
                  <option value="Sand & Aggregates">Sand & Aggregates</option>
                  <option value="Steel & Reinforcement">Steel & Reinforcement</option>
                  <option value="Building Blocks & Masonry">Building Blocks & Masonry</option>
                  <option value="Roofing Materials">Roofing Materials</option>
                  <option value="Plumbing & Drainage">Plumbing & Drainage</option>
                  <option value="Timber & Formwork">Timber & Formwork</option>
                  <option value="Other Construction Materials">Other Construction Materials</option>
                </select>
              </div>

              <div class="col-md-4">
                <label class="form-label fw-bold small">Supply Unit*</label>
                <input type="text" class="form-control" id="formProductUnit" required placeholder="e.g. 50kg Bag, Tonne, Piece">
              </div>
              <div class="col-md-4">
                <label class="form-label fw-bold small">Numerical Price (KES)</label>
                <input type="number" class="form-control" id="formProductPrice" placeholder="e.g. 780 (leave blank for request)">
              </div>
              <div class="col-md-4">
                <label class="form-label fw-bold small">Price Display Text*</label>
                <input type="text" class="form-control" id="formProductPriceDisplay" required placeholder="e.g. KES 780 / bag or Price on Request">
              </div>

              <div class="col-md-6">
                <label class="form-label fw-bold small">Availability Status*</label>
                <select class="form-select" id="formProductAvailability" required>
                  <option value="Available">Available (In Stock)</option>
                  <option value="Available on Demand">Available on Demand</option>
                  <option value="Supplier Available">Supplier Available</option>
                  <option value="Price on Request">Price on Request</option>
                  <option value="Need to Confirm">Need to Confirm</option>
                  <option value="Temporarily Unavailable">Temporarily Unavailable</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold small">Image Path</label>
                <input type="text" class="form-control" id="formProductImage" placeholder="e.g. images/products/cement-bags.jpg">
              </div>

              <div class="col-12">
                <label class="form-label fw-bold small">Description*</label>
                <textarea class="form-control" id="formProductDescription" rows="2" required placeholder="Brief practical details on suitable usage..."></textarea>
              </div>

              <div class="col-md-6">
                <label class="form-label fw-bold small">Specifications / Grade</label>
                <input type="text" class="form-control" id="formProductSpecs" placeholder="e.g. BS 4449 Grade 500 | 12m length">
              </div>
              <div class="col-md-6">
                <label class="form-label fw-bold small">Delivery / Transport Note</label>
                <input type="text" class="form-control" id="formProductDelivery" placeholder="e.g. Prompt delivery across Nairobi & Kiambu">
              </div>

              <div class="col-12">
                <div class="form-check form-switch mt-2">
                  <input class="form-check-input" type="checkbox" id="formProductVisible" checked>
                  <label class="form-check-label fw-bold small" for="formProductVisible">Show Material on Website Catalogue</label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-ribit">Save Material</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script src="js/jquery-3.7.1.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script>
    let allProducts = [];
    let allQuotes = [];

    async function loadData() {
      try {
        const res = await fetch('data/products.json?v=' + Date.now());
        if (res.ok) {
          allProducts = await res.json();
        }
      } catch (e) {
        console.log('Error loading products.json:', e);
      }

      updateStats();
      populateCategories();
      renderTable(allProducts);
      loadQuotes();
    }

    function updateStats() {
      document.getElementById('statTotalProducts').textContent = allProducts.length;
      document.getElementById('statInStock').textContent = allProducts.filter(p => p.availability === 'Available').length;
      document.getElementById('statOnDemand').textContent = allProducts.filter(p => p.availability === 'Available on Demand' || p.availability === 'Supplier Available').length;
    }

    function populateCategories() {
      const select = document.getElementById('adminCategorySelect');
      const cats = [...new Set(allProducts.map(p => p.category))];
      select.innerHTML = '<option value="all">All Categories</option>' + cats.map(c => `<option value="${c}">${c}</option>`).join('');
    }

    function renderTable(items) {
      const tbody = document.getElementById('adminProductsTable');
      if (items.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center py-4 text-muted">No materials found matching criteria.</td></tr>';
        return;
      }

      tbody.innerHTML = items.map(p => {
        const badgeKey = (p.availability || '').replace(/\s+/g, '');
        return `
          <tr>
            <td>
              <img src="${p.image}" alt="" style="width: 44px; height: 44px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0;" onerror="this.src='images/products/cement-bags.jpg'">
            </td>
            <td>
              <div class="fw-bold" style="color: var(--primary);">${p.name}</div>
              <div class="small text-muted">${(p.specs || '').substring(0, 45)}...</div>
            </td>
            <td><span class="badge bg-light text-dark border">${p.category}</span></td>
            <td>${p.unit}</td>
            <td class="fw-bold">${p.price_display}</td>
            <td><span class="badge-status badge-${badgeKey}">${p.availability}</span></td>
            <td>
              <span class="badge ${p.visible !== false ? 'bg-success' : 'bg-secondary'}">
                ${p.visible !== false ? 'Visible' : 'Hidden'}
              </span>
            </td>
            <td style="text-align: right;">
              <button class="btn btn-sm btn-outline-primary me-1" onclick="editProduct('${p.id}')" title="Edit">
                <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct('${p.id}')" title="Delete">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }

    function filterAdminProducts() {
      const q = document.getElementById('adminSearchInput').value.toLowerCase();
      const cat = document.getElementById('adminCategorySelect').value;

      let filtered = allProducts;
      if (cat !== 'all') {
        filtered = filtered.filter(p => p.category === cat);
      }
      if (q) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q)));
      }
      renderTable(filtered);
    }

    function openProductModal() {
      document.getElementById('productForm').reset();
      document.getElementById('formProductId').value = '';
      document.getElementById('productModalTitle').textContent = 'Add Construction Material';
      new bootstrap.Modal(document.getElementById('productModal')).show();
    }

    function editProduct(id) {
      const p = allProducts.find(item => item.id === id);
      if (!p) return;

      document.getElementById('formProductId').value = p.id;
      document.getElementById('formProductName').value = p.name;
      document.getElementById('formProductCategory').value = p.category;
      document.getElementById('formProductUnit').value = p.unit;
      document.getElementById('formProductPrice').value = p.price || '';
      document.getElementById('formProductPriceDisplay').value = p.price_display;
      document.getElementById('formProductAvailability').value = p.availability;
      document.getElementById('formProductImage').value = p.image;
      document.getElementById('formProductDescription').value = p.description;
      document.getElementById('formProductSpecs').value = p.specs || '';
      document.getElementById('formProductDelivery').value = p.delivery_note || '';
      document.getElementById('formProductVisible').checked = p.visible !== false;

      document.getElementById('productModalTitle').textContent = 'Edit ' + p.name;
      new bootstrap.Modal(document.getElementById('productModal')).show();
    }

    async function saveProduct(e) {
      e.preventDefault();
      const id = document.getElementById('formProductId').value;
      const product = {
        id: id || ('ribit-' + Math.random().toString(36).substr(2, 6)),
        name: document.getElementById('formProductName').value,
        category: document.getElementById('formProductCategory').value,
        unit: document.getElementById('formProductUnit').value,
        price: document.getElementById('formProductPrice').value ? parseFloat(document.getElementById('formProductPrice').value) : null,
        price_display: document.getElementById('formProductPriceDisplay').value,
        availability: document.getElementById('formProductAvailability').value,
        image: document.getElementById('formProductImage').value || 'images/products/cement-bags.jpg',
        description: document.getElementById('formProductDescription').value,
        specs: document.getElementById('formProductSpecs').value,
        delivery_note: document.getElementById('formProductDelivery').value,
        visible: document.getElementById('formProductVisible').checked
      };

      try {
        const res = await fetch('api/products.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'save_product', product })
        });
        const result = await res.json();
        alert(result.message || 'Saved successfully');
      } catch (err) {
        // Fallback update local array
        const idx = allProducts.findIndex(p => p.id === product.id);
        if (idx > -1) allProducts[idx] = product;
        else allProducts.push(product);
        alert('Material saved locally.');
      }

      bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
      await loadData();
    }

    async function deleteProduct(id) {
      if (!confirm('Are you sure you want to remove this material from Rimbit catalogue?')) return;
      try {
        await fetch('api/products.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'delete_product', id })
        });
      } catch (e) {}

      allProducts = allProducts.filter(p => p.id !== id);
      updateStats();
      renderTable(allProducts);
    }

    async function loadQuotes() {
      try {
        const res = await fetch('api/products.php?action=quotes');
        if (res.ok) {
          const json = await res.json();
          allQuotes = json.data || [];
        }
      } catch (e) {
        allQuotes = [];
      }

      document.getElementById('statQuotes').textContent = allQuotes.length;
      document.getElementById('quotesCountBadge').textContent = allQuotes.length;

      const tbody = document.getElementById('adminQuotesTable');
      if (!allQuotes || allQuotes.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" class="text-center py-4 text-muted">No quotations received yet.</td></tr>';
        return;
      }

      tbody.innerHTML = allQuotes.map(q => {
        let itemsSummary = '';
        if (q.items && q.items.length > 0) {
          itemsSummary = q.items.map(i => `${i.name} (x${i.qty})`).join(', ');
        } else {
          itemsSummary = q.materials_text || 'Custom inquiry';
        }

        return `
          <tr>
            <td><strong class="text-primary">${q.id}</strong></td>
            <td class="small text-muted">${q.timestamp}</td>
            <td>
              <div class="fw-bold">${q.name}</div>
              <div class="small text-muted">${q.company || 'Private Builder'}</div>
            </td>
            <td>
              <div><a href="tel:${q.phone}">${q.phone}</a></div>
              <div class="small text-muted">${q.email || ''}</div>
            </td>
            <td><span class="badge bg-light text-dark">${q.location || 'Not specified'}</span></td>
            <td style="max-width: 250px;" class="small">${itemsSummary}</td>
            <td><span class="badge ${q.status === 'Pending' ? 'bg-warning text-dark' : 'bg-success'}">${q.status}</span></td>
            <td style="text-align: right;">
              <a href="https://wa.me/${q.phone ? q.phone.replace(/[^0-9]/g, '') : ''}" target="_blank" class="btn btn-sm btn-success" title="Chat on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </td>
          </tr>
        `;
      }).join('');
    }

    document.addEventListener('DOMContentLoaded', loadData);
  </script>
</body>
</html>
