import { NavbarMenu } from './navbar.model';

export const NavbarMenuItems = [
    new NavbarMenu (1,'Home', '/', false, 'parent', null, 0),
    // **************Main****************** //
    new NavbarMenu (2, 'Services', '/marketplace/services', true, 'megaMenu', 'mega_menu', 0),
    // **************Child****************** //
    new NavbarMenu (21, 'STRATEGY & CONSULTING', null, true, null, 'title', 2),
    // **************Sub Child****************** //
    new NavbarMenu (211, 'Strategy & Consulting', '/marketplace/services/strategy-consulting', false, null, 'link', 21),
    new NavbarMenu (212, 'Talent & Organization / Human Potential',
    '/marketplace/services/talent-human-potential', false, null, 'link', 21),
    new NavbarMenu (213, 'Customer Insight & Growth', '/marketplace/services/customer-insight', false, null, 'link', 21),
    // **************Child****************** //
    new NavbarMenu (22, 'TECHNOLOGY', null, true, null, 'title', 2),
    // **************Sub Child****************** //
    new NavbarMenu (221, 'Artifical Intelligence', '/marketplace/services/artifical-intelligence', false, null, 'link', 22),
    new NavbarMenu (222, 'Blockchain',
    '/marketplace/services/blockchain', false, null, 'link', 22),
    new NavbarMenu (223, 'Cloud', '/marketplace/services/cloud', false, null, 'link', 22),
    new NavbarMenu (224, 'SAP', '/marketplace/services/sap', false, null, 'link', 22),
    new NavbarMenu (225, 'Service Now', '/marketplace/services/service-now', false, null, 'link', 22),
    new NavbarMenu (226, 'Workday', '/marketplace/services/workday', false, null, 'link', 22),
    new NavbarMenu (227, 'Microsoft', '/marketplace/services/microsoft', false, null, 'link', 22),
    new NavbarMenu (228, 'Oracle', '/marketplace/services/oracle', false, null, 'link', 22),
    new NavbarMenu (229, 'Angular', '/marketplace/services/angular', false, null, 'link', 22),
    // **************Child****************** //
    new NavbarMenu (23, 'OPERATIONS', null, true, null, 'title', 2),
    // **************Sub Child****************** //
    new NavbarMenu (231, 'Security service', '/marketplace/services/security-service', false, null, 'link', 23),
    new NavbarMenu (232, 'Quality assurance',
    '/marketplace/services/quality-assurance', false, null, 'link', 23),
    new NavbarMenu (233, 'Enterprise services', '/marketplace/services/enterprise-services', false, null, 'link', 23),
    // **************Main****************** //
    new NavbarMenu (3, 'Industries', '/marketplace/industries', true, 'megaMenu', 'mega_menu', 0),
      // **************Child****************** //
      new NavbarMenu (31, '', null, true, null, 'title', 3),
      // **************Sub Child****************** //
      new NavbarMenu (311, 'Banking', '/marketplace/industries/banking', false, null, 'link', 31),
      new NavbarMenu (312, 'Capital Market',
      '/marketplace/industries/captital-market', false, null, 'link', 31),
      new NavbarMenu (313, 'Communication & Media Technologies', '/marketplace/industries/communication-media', false, null, 'link', 31),
      new NavbarMenu (314, 'Consumer Goods', '/marketplace/industries/consumer-goods', false, null, 'link', 31),
      new NavbarMenu (315, 'Education', '/marketplace/industries/education', false, null, 'link', 31),
        // **************Child****************** //
      new NavbarMenu (32, '', null, true, null, 'title', 3),
      // **************Sub Child****************** //
      new NavbarMenu (321, 'Healthcare', '/marketplace/industries/healthcare', false, null, 'link', 32),
      new NavbarMenu (322, 'Information Services',
      '/marketplace/industries/information-services', false, null, 'link', 32),
      new NavbarMenu (323, 'Insurance', '/marketplace/industries/insurance', false, null, 'link', 32),
      new NavbarMenu (324, 'Life science', '/marketplace/industries/life-science', false, null, 'link', 32),
      new NavbarMenu (325, 'Logistics', '/marketplace/industries/logistics', false, null, 'link', 32),
       // **************Child****************** //
      new NavbarMenu (33, '', null, true, null, 'title', 3),
      // **************Sub Child****************** //
      new NavbarMenu (331, 'Oil & Gas', '/marketplace/industries/oil-gas', false, null, 'link', 33),
      new NavbarMenu (332, 'Manufacturing',
      '/marketplace/industries/manufacturing', false, null, 'link', 33),
      new NavbarMenu (333, 'Retail', '/marketplace/industries/retail', false, null, 'link', 33),
      new NavbarMenu (334, 'Travel hospitality', '/marketplace/industries/travel-hospitality', false, null, 'link', 33),
      new NavbarMenu (335, 'Utilities', '/marketplace/industries/utilities', false, null, 'link', 33),
    // **************Main****************** //
    new NavbarMenu (4, 'Solutions', '/marketplace/solutions', true, 'megaMenu', 'mega_menu', 0),
    // **************Child****************** //
        new NavbarMenu (41, '', null, true, null, 'title', 4),
     // **************Sub Child****************** //
     new NavbarMenu (411, 'e-Business Solution', '/marketplace/solutions/e-business-solution', false, null, 'link', 41),
     new NavbarMenu (412, 'Enterprise Application Integration',
     '/marketplace/industries/enterprise-application-integration', false, null, 'link', 41),
     new NavbarMenu (413, 'Enterprise SOA Solution', '/marketplace/industries/enterprise-soa-solution', false, null, 'link', 41),
     new NavbarMenu (414, 'Mobile Apps Devlopment', '/marketplace/industries/mobile-apps-development', false, null, 'link', 41),
     new NavbarMenu (415, 'Web Devlopment', '/marketplace/industries/web-development', false, null, 'link', 41),
    // **************Main****************** //
    new NavbarMenu (5, 'Careers', '/marketplace/careers', false, 'parent', 'link', 0),
    // **************Main****************** //
    new NavbarMenu (6, 'About us', '/marketplace/about-us', true, 'megaMenu', 'mega_menu', 0),
    // **************Child****************** //
    new NavbarMenu (61, '', null, true, null, 'title', 6),
    // **************Sub Child****************** //
    new NavbarMenu (611, 'Business Snapshot', '/marketplace/about-us/business-snapshot', false, null, 'link', 61),
    new NavbarMenu (612, 'Corporate Governance',
    '/marketplace/about-us/corporate-governance', false, null, 'link', 61),
    new NavbarMenu (613, 'Culture Values', '/marketplace/about-us/culture-values', false, null, 'link', 61),
    new NavbarMenu (614, 'Diversity Inclusion', '/marketplace/about-us/diversity-inclusion', false, null, 'link', 61),
    new NavbarMenu (615, 'Leadership team', '/marketplace/about-us/leadership-team', false, null, 'link', 61),
     // **************Child****************** //
     new NavbarMenu (62, '', null, true, null, 'title', 6),
     // **************Sub Child****************** //
     new NavbarMenu (621, 'Partnerships', '/marketplace/about-us/partnerships', false, null, 'link', 62),
     new NavbarMenu (622, 'Public Policy',
     '/marketplace/about-us/public-policy', false, null, 'link', 62),
     new NavbarMenu (623, 'Stability', '/marketplace/about-us/stability', false, null, 'link', 62),
     new NavbarMenu (624, 'Talent world', '/marketplace/about-us/talent-world', false, null, 'link', 62),
    // **************Child****************** //
      new NavbarMenu (63, '', null, true, null, 'title', 6),
      // **************Sub Child****************** //
      new NavbarMenu (631, 'Partnerships', '/marketplace/about-us/about-rayonsoft', false, null, 'link', 63),
      new NavbarMenu (632, 'Rayonsoft Events',
      '/marketplace/about-us/rayonsoft-events', false, null, 'link', 63),
      new NavbarMenu (633, 'Women Empowered', '/marketplace/about-us/women-empowered', false, null, 'link', 63),
      new NavbarMenu (634, 'Contact us', '/marketplace/about-us/contact-us', false, null, 'link', 63),
]