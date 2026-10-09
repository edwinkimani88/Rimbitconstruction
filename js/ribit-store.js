/**
 * Ribit Construction Limited — Store & Quotation Engine
 * Handles live catalogue filtering, search, quote cart, offcanvas drawer, and direct WhatsApp quoting.
 */

// Fallback products data (embedded so store always works even via file:// protocol)
const RIBIT_FALLBACK_PRODUCTS = [
  {
    id: "ribit-cem-01",
    name: "Bamburi Tembo Cement (CEM II 32.5R)",
    category: "Cement",
    image: "images/products/cement-bags.jpg",
    unit: "50kg Bag",
    price: 780,
    currency: "KES",
    price_display: "KES 780 / bag",
    availability: "Available",
    description: "Standard Portland Pozzolana cement suitable for general structural concrete, plastering, mortar, bricklaying, and floor screeding. Reliable early strength and workability.",
    specs: "CEM II / B-P 32.5R | KEBS Certified | 50kg standard moisture-resistant paper bag",
    min_order: "10 Bags (Bulk discounts on 100+ bags)",
    delivery_note: "Direct delivery coordinated to site across Nairobi & adjacent counties",
    visible: true
  },
  {
    id: "ribit-cem-02",
    name: "Bamburi Nguvu Cement (CEM II 42.5N)",
    category: "Cement",
    image: "images/products/cement-bags.jpg",
    unit: "50kg Bag",
    price: 850,
    currency: "KES",
    price_display: "KES 850 / bag",
    availability: "Available",
    description: "High-strength structural cement designed for heavy-duty structural applications, multi-storey columns, beams, suspended slabs, precast elements, and bridges.",
    specs: "CEM II / A-L 42.5N | High Compressive Strength | KEBS Certified",
    min_order: "10 Bags",
    delivery_note: "Available for prompt site drop or planned bulk deliveries",
    visible: true
  },
  {
    id: "ribit-cem-03",
    name: "Simba Cement Power Plus (32.5R)",
    category: "Cement",
    image: "images/products/cement-bags.jpg",
    unit: "50kg Bag",
    price: 740,
    currency: "KES",
    price_display: "KES 740 / bag",
    availability: "Available",
    description: "Cost-effective, dependable Portland composite cement popular for residential building, perimeter walls, plastering, and general masonry works.",
    specs: "CEM II 32.5R | National Cement Company Ltd | KEBS Approved",
    min_order: "20 Bags",
    delivery_note: "Prompt delivery to project sites",
    visible: true
  },
  {
    id: "ribit-cem-04",
    name: "Mombasa Cement Nyumba (32.5R)",
    category: "Cement",
    image: "images/products/cement-bags.jpg",
    unit: "50kg Bag",
    price: 730,
    currency: "KES",
    price_display: "KES 730 / bag",
    availability: "Available",
    description: "Widely trusted multi-purpose cement offering good workability, smooth finish for plastering, and reliable masonry strength.",
    specs: "CEM II 32.5R | KEBS Certified | 50kg bag",
    min_order: "20 Bags",
    delivery_note: "Site deliveries arranged according to schedule",
    visible: true
  },
  {
    id: "ribit-cem-05",
    name: "Savannah Cement (42.5N Rapid Hardening)",
    category: "Cement",
    image: "images/products/cement-bags.jpg",
    unit: "50kg Bag",
    price: null,
    currency: "KES",
    price_display: "Price on Request",
    availability: "Supplier Available",
    description: "High performance cement specifically for fast shutter stripping, structural casting, and commercial foundations requiring high early strength.",
    specs: "CEM I / CEM II 42.5N | Factory Fresh Batch",
    min_order: "50 Bags",
    delivery_note: "Direct factory supply dispatch coordinated for project volume",
    visible: true
  },
  {
    id: "ribit-agg-01",
    name: "Clean River Sand (Machakos / Makueni)",
    category: "Sand & Aggregates",
    image: "images/products/sand-ballast.jpg",
    unit: "Tonne / Tipper Lorry",
    price: null,
    currency: "KES",
    price_display: "Price on Request (Location Dependent)",
    availability: "Available on Demand",
    description: "Clean, silt-free river sand sourced directly from authorized dry riverbeds. Ideal for structural concrete mixes, sub-structures, and foundation blinding.",
    specs: "Coarse to medium grain | Low silt and organic content | Sold by 10-Tonne, 14-Tonne, 20-Tonne, or 28-Tonne Tippers",
    min_order: "1 Tipper (Minimum 10 Tonnes)",
    delivery_note: "Pricing calibrated strictly to your exact site delivery distance",
    visible: true
  },
  {
    id: "ribit-agg-02",
    name: "Fine Plastering Sand",
    category: "Sand & Aggregates",
    image: "images/products/sand-ballast.jpg",
    unit: "Tonne / Tipper Lorry",
    price: null,
    currency: "KES",
    price_display: "Price on Request",
    availability: "Available on Demand",
    description: "Screened fine-grain sand specifically for internal and external wall plastering, skimming, and smooth architectural screeds.",
    specs: "Screened fine texture | Even particle gradation",
    min_order: "1 Tipper Lorry",
    delivery_note: "Direct quarry dispatch to site",
    visible: true
  },
  {
    id: "ribit-agg-03",
    name: "Machine Crushed Ballast 3/4\" (20mm)",
    category: "Sand & Aggregates",
    image: "images/products/sand-ballast.jpg",
    unit: "Tonne / Tipper Lorry",
    price: null,
    currency: "KES",
    price_display: "Price on Request",
    availability: "Available",
    description: "High quality machine-crushed blue-rock aggregate. The standard size for structural reinforced concrete casting, ground slabs, columns, and ring beams.",
    specs: "Nominal 20mm (3/4\") | Angular crushed hard stone | Free of dirt and dust",
    min_order: "10 Tonnes",
    delivery_note: "Dispatched promptly from nearby crushing plants",
    visible: true
  },
  {
    id: "ribit-agg-04",
    name: "Machine Crushed Ballast 1/2\" (10mm-12mm)",
    category: "Sand & Aggregates",
    image: "images/products/sand-ballast.jpg",
    unit: "Tonne / Tipper Lorry",
    price: null,
    currency: "KES",
    price_display: "Price on Request",
    availability: "Available",
    description: "Medium-sized crushed aggregate for fine structural concrete, lintels, concrete copings, paving, and precast concrete work.",
    specs: "10mm - 12mm crushed blue stone",
    min_order: "10 Tonnes",
    delivery_note: "Coordinated delivery with tipper trucks",
    visible: true
  },
  {
    id: "ribit-agg-05",
    name: "Quarry Dust / Hardcore Fill",
    category: "Sand & Aggregates",
    image: "images/products/sand-ballast.jpg",
    unit: "Tonne / Tipper Lorry",
    price: null,
    currency: "KES",
    price_display: "Price on Request",
    availability: "Available on Demand",
    description: "Compaction quarry dust for paving block bedding and clean hardcore rubble for solid sub-base foundation and ground slab preparation.",
    specs: "Quarry fines or raw volcanic hardcore",
    min_order: "1 Tipper Lorry",
    delivery_note: "Bulk site delivery coordinated directly from quarries",
    visible: true
  },
  {
    id: "ribit-stl-01",
    name: "High-Yield TMT Deformed Rebars D8 (8mm x 12m)",
    category: "Steel & Reinforcement",
    image: "images/products/steel-rebars.jpg",
    unit: "Piece (12m Length)",
    price: 620,
    currency: "KES",
    price_display: "KES 620 / pc",
    availability: "Available",
    description: "Thermo-mechanically treated (TMT) high tensile reinforcement rebar. Primarily used for stirrups, links, and secondary structural reinforcement.",
    specs: "BS 4449 Grade 500 / KS 02-104 | 12 Metre Lengths | KEBS Certified",
    min_order: "10 Pieces (or bundle of 20)",
    delivery_note: "Can be combined with other steel bars and delivered to site",
    visible: true
  },
  {
    id: "ribit-stl-02",
    name: "High-Yield TMT Deformed Rebars D10 (10mm x 12m)",
    category: "Steel & Reinforcement",
    image: "images/products/steel-rebars.jpg",
    unit: "Piece (12m Length)",
    price: 940,
    currency: "KES",
    price_display: "KES 940 / pc",
    availability: "Available",
    description: "Grade 500 deformed rebar used in slab reinforcement, light structural columns, ground beams, and retaining walls.",
    specs: "D10 | Grade 500 | 12m standard length | High ductility",
    min_order: "10 Pieces",
    delivery_note: "Direct crane or flatbed truck offloading to project site",
    visible: true
  },
  {
    id: "ribit-stl-03",
    name: "High-Yield TMT Deformed Rebars D12 (12mm x 12m)",
    category: "Steel & Reinforcement",
    image: "images/products/steel-rebars.jpg",
    unit: "Piece (12m Length)",
    price: 1350,
    currency: "KES",
    price_display: "KES 1,350 / pc",
    availability: "Available",
    description: "Core structural rebar for residential and commercial building columns, suspended beam cages, pad footings, and structural slabs.",
    specs: "D12 | Grade 500 TMT | KEBS Mark of Quality | 12m",
    min_order: "10 Pieces (Bulk discounts on tonnage orders)",
    delivery_note: "Prompt delivery to project sites across Kenya",
    visible: true
  },
  {
    id: "ribit-stl-04",
    name: "High-Yield TMT Deformed Rebars D16 (16mm x 12m)",
    category: "Steel & Reinforcement",
    image: "images/products/steel-rebars.jpg",
    unit: "Piece (12m Length)",
    price: 2400,
    currency: "KES",
    price_display: "KES 2,400 / pc",
    availability: "Available",
    description: "Heavy structural reinforcement steel for heavy load-bearing columns, bridge structures, deep foundation piles, and transfer beams.",
    specs: "D16 | Grade 500B | High yield tensile strength | 12m",
    min_order: "5 Pieces",
    delivery_note: "Scheduled deliveries with certified weight receipts",
    visible: true
  },
  {
    id: "ribit-stl-05",
    name: "BRC Mesh Fabric A142 / A98 (2.4m x 48m)",
    category: "Steel & Reinforcement",
    image: "images/products/steel-rebars.jpg",
    unit: "Roll / Sheet",
    price: null,
    currency: "KES",
    price_display: "Price on Request",
    availability: "Supplier Available",
    description: "Welded steel wire fabric for crack control in ground-supported concrete slabs, driveways, warehouse floors, and precast concrete.",
    specs: "A142 (6mm wire at 200mm spacing) or A98 | 2.4m width",
    min_order: "1 Roll / Sheet",
    delivery_note: "Delivered rolled or flat sheet per client preference",
    visible: true
  },
  {
    id: "ribit-stl-06",
    name: "Annealed Black Binding Wire (16 Gauge)",
    category: "Steel & Reinforcement",
    image: "images/products/steel-rebars.jpg",
    unit: "25kg Roll",
    price: 3800,
    currency: "KES",
    price_display: "KES 3,800 / roll",
    availability: "Available",
    description: "Flexible annealed black iron wire for steel fixers to tie rebar cages, column links, and reinforcement mesh securely.",
    specs: "Gauge 16 (1.6mm) | Soft annealed finish | 25kg standard bundle",
    min_order: "1 Roll",
    delivery_note: "In stock for immediate dispatch with steel orders",
    visible: true
  },
  {
    id: "ribit-blk-01",
    name: "Machine-Cut Foundation Stones (9\" x 9\" x 18\")",
    category: "Building Blocks & Masonry",
    image: "images/products/building-stones.jpg",
    unit: "Piece (Delivered to Site)",
    price: 58,
    currency: "KES",
    price_display: "KES 58 / pc (Delivered)",
    availability: "Available on Demand",
    description: "Heavy-duty quarry machine-cut natural building stones from Ndarugu/Juja quarries. Perfectly dimensioned for foundation courses and heavy basement walling.",
    specs: "9 inch width x 9 inch height x 18 inch length | Hard quarry cut | True corners",
    min_order: "Lorry load (Approx. 600 - 900 pieces depending on truck capacity)",
    delivery_note: "Direct lorry delivery and offloading coordination at site",
    visible: true
  },
  {
    id: "ribit-blk-02",
    name: "Machine-Cut Walling Stones (6\" x 9\" x 18\")",
    category: "Building Blocks & Masonry",
    image: "images/products/building-stones.jpg",
    unit: "Piece (Delivered to Site)",
    price: 48,
    currency: "KES",
    price_display: "KES 48 / pc (Delivered)",
    availability: "Available on Demand",
    description: "Standard 6-inch machine cut building stones for external and internal superstructure walling. Uniform dimensions reduce mortar usage and speed up masonry.",
    specs: "6 inch x 9 inch x 18 inch | Selected hard / medium stone grade",
    min_order: "Lorry load (Approx. 900 - 1,400 pieces)",
    delivery_note: "Prices include quarry loading, transport, and site delivery",
    visible: true
  },
  {
    id: "ribit-blk-03",
    name: "Solid Concrete Blocks (6\" & 8\")",
    category: "Building Blocks & Masonry",
    image: "images/products/building-stones.jpg",
    unit: "Piece",
    price: 85,
    currency: "KES",
    price_display: "KES 85 / pc",
    availability: "Available",
    description: "Vibrated precast concrete building blocks with high compressive load resistance. Ideal for boundary walls, partition walls, and commercial structures.",
    specs: "Machine-vibrated solid concrete | Cured to standard strength",
    min_order: "100 Pieces",
    delivery_note: "Transport arranged by tipper or flatbed",
    visible: true
  },
  {
    id: "ribit-blk-04",
    name: "Cabro Paving Blocks (60mm / 80mm Heavy Duty)",
    category: "Building Blocks & Masonry",
    image: "images/products/building-stones.jpg",
    unit: "Square Metre (sqm)",
    price: 950,
    currency: "KES",
    price_display: "KES 950 / sqm",
    availability: "Supplier Available",
    description: "Heavy-duty interlocking concrete paving blocks suitable for compound driveways, parking bays, commercial yards, and walkways.",
    specs: "60mm (light traffic) / 80mm (heavy truck traffic) | Grey / Red / Charcoal / Yellow | 49 pcs/sqm",
    min_order: "50 Square Metres",
    delivery_note: "Coordinated supply with delivery to project location",
    visible: true
  },
  {
    id: "ribit-rof-01",
    name: "Box Profile Pre-Painted Iron Sheets (Gauge 28)",
    category: "Roofing Materials",
    image: "images/products/roofing-sheets.jpg",
    unit: "Metre / Custom Length",
    price: 620,
    currency: "KES",
    price_display: "KES 620 / metre",
    availability: "Available",
    description: "Modern box profile roofing sheets offering superior rainwater drainage and contemporary look. Available in Charcoal Grey, Tile Red, Deep Blue, and Forest Green.",
    specs: "Gauge 28 | Box Profile trapezoidal profile | High anti-corrosion coating | Cut to required length (up to 12m)",
    min_order: "10 Pieces (Custom lengths cut to your roof schedule)",
    delivery_note: "Direct delivery to residential or commercial site",
    visible: true
  },
  {
    id: "ribit-rof-02",
    name: "Corrugated Galvanized Iron Sheets (Gauge 30 / 28)",
    category: "Roofing Materials",
    image: "images/products/roofing-sheets.jpg",
    unit: "Piece (2.5m - 3m)",
    price: 980,
    currency: "KES",
    price_display: "KES 980 / sheet",
    availability: "Available",
    description: "Traditional zinc-coated corrugated iron sheets for residential roofs, temporary site hoardings, stores, and perimeter enclosures.",
    specs: "Standard wave corrugation | 2.0m, 2.5m, and 3.0m lengths",
    min_order: "10 Sheets",
    delivery_note: "Immediate dispatch available",
    visible: true
  },
  {
    id: "ribit-rof-03",
    name: "Roofing Nails with Rubber Washers (2.5kg Box)",
    category: "Roofing Materials",
    image: "images/products/roofing-sheets.jpg",
    unit: "Box (2.5kg)",
    price: 650,
    currency: "KES",
    price_display: "KES 650 / box",
    availability: "Available",
    description: "Galvanized spiral shank roofing nails fitted with weather-proof rubber seal washers to prevent roof leaks at fixing points.",
    specs: "2.5 inch twisted shank | Leak-proof EPDM rubber seal",
    min_order: "1 Box",
    delivery_note: "Supplied together with roofing sheets",
    visible: true
  },
  {
    id: "ribit-rof-04",
    name: "Roofing Ridge Caps & Valley Gutters (Gauge 28)",
    category: "Roofing Materials",
    image: "images/products/roofing-sheets.jpg",
    unit: "Piece (2.4m Length)",
    price: 420,
    currency: "KES",
    price_display: "KES 420 / pc",
    availability: "Available on Demand",
    description: "Matching roll-formed ridge caps and valleys in colors coordinating with box profile sheets for clean, leak-free roof apex finishing.",
    specs: "Gauge 28 | Colors: Charcoal, Brick Red, Royal Blue | 2.4m length",
    min_order: "5 Pieces",
    delivery_note: "Delivered with roofing bundle",
    visible: true
  }
];

class RibitStore {
  constructor() {
    this.products = [];
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.quoteBasket = this.loadBasket();
    this.apiUrl = 'api/products.php';
    this.phoneKenya = '+254729879047'; // Richard - Operations & Material Supply Desk
    this.contactPerson = 'Richard';

    this.init();
  }

  async init() {
    await this.fetchProducts();
    this.renderCategoryChips();
    this.renderProducts();
    this.updateBasketUI();
    this.setupEventListeners();
  }

  async fetchProducts() {
    try {
      const res = await fetch('data/products.json?v=' + Date.now());
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.products = data;
          return;
        }
      }
    } catch (e) {
      console.log('Using preloaded catalogue fallback:', e);
    }
    this.products = RIBIT_FALLBACK_PRODUCTS;
  }

  loadBasket() {
    try {
      const stored = localStorage.getItem('ribit_quote_basket');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveBasket() {
    try {
      localStorage.setItem('ribit_quote_basket', JSON.stringify(this.quoteBasket));
    } catch (e) {}
    this.updateBasketUI();
  }

  getBadgeClass(status) {
    switch ((status || '').toLowerCase()) {
      case 'available':
        return 'badge-available';
      case 'available on demand':
        return 'badge-demand';
      case 'supplier available':
        return 'badge-supplier';
      case 'price on request':
        return 'badge-quote';
      case 'need to confirm':
        return 'badge-confirm';
      case 'temporarily unavailable':
        return 'badge-unavailable';
      default:
        return 'badge-available';
    }
  }

  renderCategoryChips() {
    const container = document.getElementById('categoryChipsContainer');
    if (!container) return;

    const categories = ['All Materials', ...new Set(this.products.map(p => p.category))];
    container.innerHTML = categories.map(cat => {
      const isAll = cat === 'All Materials';
      const key = isAll ? 'all' : cat;
      const isActive = this.currentCategory === key ? 'active' : '';
      return `<button type="button" class="category-chip ${isActive}" data-category="${key}">${cat}</button>`;
    }).join('');
  }

  renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let filtered = this.products.filter(p => p.visible !== false);

    if (this.currentCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === this.currentCategory.toLowerCase());
    }

    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        (p.name && p.name.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.specs && p.specs.toLowerCase().includes(q))
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="py-4">
            <i class="fa-solid fa-boxes-stacked" style="font-size: 48px; color: #cbd5e1; margin-bottom: 16px;"></i>
            <h4 style="color: var(--ribit-navy); font-weight: 700;">No construction materials found</h4>
            <p style="color: #64748b; max-width: 480px; margin: 0 auto 20px;">We supply custom items on demand. Let us know what you need for your site and our supply team will source it.</p>
            <a href="#quote-section" class="btn-default btn-highlighted">Request Custom Quote</a>
          </div>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const badgeCls = this.getBadgeClass(p.availability);
      const isPriceOnReq = !p.price || p.price_display.toLowerCase().includes('request');
      const inBasket = this.quoteBasket.some(item => item.id === p.id);

      return `
        <div class="col-xl-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
          <div class="ribit-product-card" data-product-id="${p.id}">
            <div class="product-card-thumb">
              <span class="product-card-badge ${badgeCls}">${p.availability}</span>
              <span class="product-category-tag">${p.category}</span>
              <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='images/products/cement-bags.jpg'">
            </div>
            <div class="product-card-body">
              <h3 class="product-card-title">
                <a href="javascript:void(0)" onclick="ribitStore.showQuickView('${p.id}')">${p.name}</a>
              </h3>
              <p class="product-card-specs">${p.description}</p>
              
              <div class="product-card-meta">
                <div class="meta-row mb-1">
                  <span class="meta-label">Unit:</span>
                  <span class="meta-value">${p.unit}</span>
                </div>
                <div class="meta-row">
                  <span class="meta-label">Supply Price:</span>
                  <span class="price-tag ${isPriceOnReq ? 'request-tag' : ''}">${p.price_display}</span>
                </div>
              </div>

              <div class="product-card-actions">
                <button type="button" class="btn-quote-add ${inBasket ? 'added' : ''}" onclick="ribitStore.addToQuote('${p.id}')">
                  <i class="fa-solid ${inBasket ? 'fa-check' : 'fa-clipboard-list'}"></i>
                  <span>${inBasket ? 'Added to Quote' : 'Add to Quote'}</span>
                </button>
                <button type="button" class="btn-quickview" title="View Specifications" onclick="ribitStore.showQuickView('${p.id}')">
                  <i class="fa-regular fa-eye"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  addToQuote(productId, quantity = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.quoteBasket.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.quoteBasket[existingIndex].qty = (parseInt(this.quoteBasket[existingIndex].qty) || 1) + quantity;
      this.showToast(`Updated quantity for ${product.name}`);
    } else {
      this.quoteBasket.push({
        id: product.id,
        name: product.name,
        category: product.category,
        unit: product.unit,
        price_display: product.price_display,
        image: product.image,
        qty: quantity
      });
      this.showToast(`Added ${product.name} to quote request`);
    }

    this.saveBasket();
    this.renderProducts();
  }

  removeFromQuote(productId) {
    this.quoteBasket = this.quoteBasket.filter(item => item.id !== productId);
    this.saveBasket();
    this.renderProducts();
    this.renderDrawerItems();
  }

  updateItemQty(productId, newQty) {
    const item = this.quoteBasket.find(i => i.id === productId);
    if (item) {
      item.qty = Math.max(1, parseInt(newQty) || 1);
      this.saveBasket();
    }
  }

  updateBasketUI() {
    const totalCount = this.quoteBasket.reduce((acc, item) => acc + (parseInt(item.qty) || 1), 0);
    
    // Update all count badges
    document.querySelectorAll('.quote-count-badge, .floating-quote-fab .badge').forEach(badge => {
      badge.textContent = totalCount;
    });

    const fab = document.getElementById('floatingQuoteFab');
    if (fab) {
      fab.style.display = totalCount > 0 ? 'flex' : 'none';
    }
  }

  openDrawer() {
    this.renderDrawerItems();
    const drawer = document.getElementById('quoteDrawer');
    const backdrop = document.getElementById('quoteDrawerBackdrop');
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    const drawer = document.getElementById('quoteDrawer');
    const backdrop = document.getElementById('quoteDrawerBackdrop');
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  renderDrawerItems() {
    const container = document.getElementById('drawerItemsContainer');
    const emptyState = document.getElementById('drawerEmptyState');
    const formContainer = document.getElementById('drawerFormContainer');
    if (!container) return;

    if (this.quoteBasket.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      if (formContainer) formContainer.style.display = 'none';
      container.innerHTML = '';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (formContainer) formContainer.style.display = 'block';

    container.innerHTML = this.quoteBasket.map(item => `
      <div class="drawer-item">
        <img src="${item.image}" alt="${item.name}" class="drawer-item-img" onerror="this.src='images/products/cement-bags.jpg'">
        <div class="drawer-item-info">
          <div class="drawer-item-name">${item.name}</div>
          <div class="drawer-item-unit">${item.unit} • <span style="color: #d97706; font-weight:600;">${item.price_display}</span></div>
        </div>
        <div class="drawer-item-qty">
          <input type="number" min="1" value="${item.qty || 1}" onchange="ribitStore.updateItemQty('${item.id}', this.value)" title="Order Quantity">
        </div>
        <button type="button" class="drawer-item-remove" onclick="ribitStore.removeFromQuote('${item.id}')" title="Remove item">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `).join('');
  }

  showQuickView(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('quickViewTitle');
    const modalBody = document.getElementById('quickViewBody');
    if (!modalTitle || !modalBody) return;

    const badgeCls = this.getBadgeClass(product.availability);
    modalTitle.textContent = product.name;

    const waMsg = encodeURIComponent(`Hello Ribit Construction, I would like to inquire about: ${product.name} (Unit: ${product.unit}). Please advise on availability and site delivery pricing.`);

    modalBody.innerHTML = `
      <div class="row">
        <div class="col-md-5 mb-3 mb-md-0">
          <div style="border-radius: 12px; overflow: hidden; height: 260px; background: #f1f5f9;">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='images/products/cement-bags.jpg'">
          </div>
          <div class="mt-3">
            <span class="product-card-badge ${badgeCls}" style="position: static; display: inline-block;">${product.availability}</span>
          </div>
        </div>
        <div class="col-md-7">
          <h4 style="color: var(--ribit-navy); font-weight: 700; margin-bottom: 6px;">${product.name}</h4>
          <p style="color: #64748b; font-size: 14px; margin-bottom: 12px;">Category: <strong>${product.category}</strong></p>
          
          <div style="background: #f8fafc; padding: 14px; border-radius: 10px; margin-bottom: 16px; border: 1px solid #e2e8f0;">
            <div class="d-flex justify-content-between mb-1">
              <span style="color: #64748b; font-size: 14px;">Supply Unit:</span>
              <strong style="color: var(--ribit-navy);">${product.unit}</strong>
            </div>
            <div class="d-flex justify-content-between mb-1">
              <span style="color: #64748b; font-size: 14px;">Indicative Rate:</span>
              <strong style="color: #d97706; font-size: 16px;">${product.price_display}</strong>
            </div>
            <div class="d-flex justify-content-between">
              <span style="color: #64748b; font-size: 14px;">Minimum Order:</span>
              <span style="color: var(--ribit-navy); font-size: 13px;">${product.min_order || 'Flexible'}</span>
            </div>
          </div>

          <p style="font-size: 14px; color: #334155; line-height: 1.6; margin-bottom: 12px;">${product.description}</p>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 16px;"><i class="fa-solid fa-certificate me-2 text-warning"></i>${product.specs}</p>
          <p style="font-size: 13px; color: #10b981; margin-bottom: 20px;"><i class="fa-solid fa-truck-fast me-2"></i>${product.delivery_note}</p>

          <div class="d-flex gap-2 flex-wrap">
            <button type="button" class="btn-default btn-highlighted" onclick="ribitStore.addToQuote('${product.id}'); bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();">
              <i class="fa-solid fa-clipboard-list me-2"></i>Add to Quote
            </button>
            <a href="https://wa.me/254729879047?text=${waMsg}" target="_blank" class="btn-default" style="background: #25d366; color: #fff; border-color: #25d366;">
              <i class="fa-brands fa-whatsapp me-2"></i>WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    modal.show();
  }

  showToast(message) {
    let toast = document.getElementById('ribitToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ribitToast';
      toast.className = 'ribit-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  setupEventListeners() {
    // Category chips click
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.category-chip');
      if (chip) {
        document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.currentCategory = chip.dataset.category;
        this.renderProducts();
      }
    });

    // Search input
    const searchInput = document.getElementById('storeSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderProducts();
      });
    }

    // Drawer close buttons
    const closeBtn = document.getElementById('closeQuoteDrawer');
    const backdrop = document.getElementById('quoteDrawerBackdrop');
    if (closeBtn) closeBtn.addEventListener('click', () => this.closeDrawer());
    if (backdrop) backdrop.addEventListener('click', () => this.closeDrawer());

    // Quote Cart buttons
    document.querySelectorAll('.trigger-quote-drawer').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openDrawer();
      });
    });

    // Handle Drawer Quote Form Submission
    const drawerForm = document.getElementById('drawerQuoteForm');
    if (drawerForm) {
      drawerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = drawerForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Submitting...';

        const formData = new FormData(drawerForm);
        const name = formData.get('name') || '';
        const company = formData.get('company') || '';
        const phone = formData.get('phone') || '';
        const email = formData.get('email') || '';
        const location = formData.get('location') || '';
        const notes = formData.get('notes') || '';

        const payload = {
          action: 'request_quote',
          name,
          company,
          phone,
          email,
          location,
          notes,
          items: this.quoteBasket
        };

        // Try sending to PHP backend
        try {
          const res = await fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const result = await res.json();
          console.log('Quote API response:', result);
        } catch (err) {
          console.log('Local/fallback quote process:', err);
        }

        // Generate WhatsApp fallback message
        let itemsList = this.quoteBasket.map(i => `• ${i.name} (Qty: ${i.qty} ${i.unit})`).join('%0A');
        let waText = `*NEW QUOTE REQUEST - RIBIT CONSTRUCTION*%0A` +
          `*Name:* ${encodeURIComponent(name)}%0A` +
          (company ? `*Company:* ${encodeURIComponent(company)}%0A` : '') +
          `*Phone:* ${encodeURIComponent(phone)}%0A` +
          (email ? `*Email:* ${encodeURIComponent(email)}%0A` : '') +
          `*Site Location:* ${encodeURIComponent(location)}%0A` +
          (notes ? `*Notes:* ${encodeURIComponent(notes)}%0A` : '') +
          `%0A*Materials Required:*%0A${itemsList}%0A%0APlease provide price quotation and site delivery timeline.`;

        // Clear basket
        this.quoteBasket = [];
        this.saveBasket();
        this.renderProducts();
        this.closeDrawer();

        this.showToast('Quotation request submitted! Redirecting to WhatsApp for instant confirmation...');
        
        setTimeout(() => {
          window.open(`https://wa.me/254729879047?text=${waText}`, '_blank');
        }, 1200);

        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane me-2"></i>Send Quotation Request';
      });
    }

    // Handle Main Page Quote Form Submission
    const mainQuoteForm = document.getElementById('mainQuoteForm');
    if (mainQuoteForm) {
      mainQuoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = mainQuoteForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Processing...';

        const formData = new FormData(mainQuoteForm);
        const name = formData.get('name') || '';
        const company = formData.get('company') || '';
        const phone = formData.get('phone') || '';
        const email = formData.get('email') || '';
        const location = formData.get('location') || '';
        const materials_text = formData.get('materials_text') || '';
        const notes = formData.get('notes') || '';

        const payload = {
          action: 'request_quote',
          name,
          company,
          phone,
          email,
          location,
          materials_text,
          notes,
          items: this.quoteBasket
        };

        try {
          await fetch(this.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        } catch (err) {}

        let waText = `*DIRECT MATERIAL QUOTE REQUEST - RIBIT CONSTRUCTION*%0A` +
          `*Name:* ${encodeURIComponent(name)}%0A` +
          (company ? `*Company:* ${encodeURIComponent(company)}%0A` : '') +
          `*Phone:* ${encodeURIComponent(phone)}%0A` +
          (email ? `*Email:* ${encodeURIComponent(email)}%0A` : '') +
          `*Site Location:* ${encodeURIComponent(location)}%0A` +
          `*Materials & Quantities:*%0A${encodeURIComponent(materials_text)}%0A` +
          (notes ? `*Additional Details:* ${encodeURIComponent(notes)}%0A` : '') +
          `%0APlease confirm supply availability and delivery terms.`;

        this.showToast('Thank you! Your quote request has been submitted.');

        setTimeout(() => {
          window.open(`https://wa.me/254729879047?text=${waText}`, '_blank');
        }, 1200);

        mainQuoteForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane me-2"></i>Request a Quote';
      });
    }
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.ribitStore = new RibitStore();
});
