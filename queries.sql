create database estimator;

use estimator;

CREATE TABLE feature_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE features (
    feature_id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    feature_name VARCHAR(150) NOT NULL,
    cost DECIMAL(10,2),
    
    CONSTRAINT fk_category
        FOREIGN KEY (category_id) REFERENCES feature_categories(category_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO feature_categories (category_name) VALUES
('User Management'),
('UI/UX & Design'),
('Core App Features'),
('E-Commerce Features'),
('Communication & Engagement'),
('Analytics & Insights'),
('Security & Compliance'),
('Advanced Features'),
('Infrastructure & Integrations'),
('Maintenance & Deployment'),
('Marketing Features');

select * from feature_categories order by category_id;

INSERT INTO features (category_id, feature_name, cost) VALUES
(1, 'Email/Password Login', 300.00),
(1, 'Social Login (Google, Facebook, Apple, etc.)', 400.00),
(1, 'OTP Login (Email/SMS)', 400.00),
(1, 'Role-Based Access Control (Admin/User)', 600.00),
(1, 'Profile Management', 300.00),
(1, 'Forgot Password / Reset', 200.00);

select * from features;

INSERT INTO features (category_id, feature_name, cost) VALUES
(2, 'Custom UI Design', 1000.00),
(2, 'Responsive Layouts', 800.00),
(2, 'Animations & Transitions', 600.00),
(2, 'Accessibility (WCAG Compliance)', 500.00);

INSERT INTO features (category_id, feature_name, cost) VALUES
(3, 'Dashboard', 700.00),
(3, 'Search & Filters', 500.00),
(3, 'File Upload (Images, Docs)', 300.00),
(3, 'Push Notifications', 300.00),
(3, 'In-App Messaging / Chat', 1500.00),
(3, 'Calendar / Scheduler', 600.00),
(3, 'Activity Feed / Timeline', 800.00),
(3, 'Feedback, Rating & Review System', 400.00);


INSERT INTO features (category_id, feature_name, cost) VALUES
(4, 'Product Listing / Catalog', 700.00),
(4, 'Shopping Cart', 500.00),
(4, 'Wishlist', 300.00),
(4, 'Checkout Flow', 700.00),
(4, 'Payment Gateway Integration (Stripe, Razorpay, PayPal, etc.)', 800.00),
(4, 'Coupon & Discount System', 500.00),
(4, 'Order History / Tracking', 700.00),
(4, 'Invoice', 400.00);

INSERT INTO features (category_id, feature_name, cost) VALUES
(5, 'Email Notifications', 200.00),
(5, 'SMS Notifications', 300.00),
(5, 'Live Chat (Socket / Firebase)', 1000.00);


INSERT INTO features (category_id, feature_name, cost) VALUES
(6, 'User Analytics Dashboard', 700.00),
(6, 'Google Analytics / Mixpanel Integration', 300.00),
(6, 'Admin Reports / Export CSV', 500.00);

INSERT INTO features (category_id, feature_name, cost) VALUES
(7, 'Data Encryption (at rest & in transit)', 600.00),
(7, 'Secure Payments (PCI-DSS Compliance)', 700.00),
(7, 'GDPR / Privacy Compliance', 500.00),
(7, 'Audit Logs', 500.00);

INSERT INTO features (category_id, feature_name, cost) VALUES
(8, 'AI Chatbot (e.g., OpenAI Integration)', 1500.00),
(8, 'Recommendation System (AI-based)', 2000.00),
(8, 'AR / VR Module', 5000.00),
(8, 'GPS Tracking / Geolocation', 700.00),
(8, 'Map Integration (Google Maps, Mapbox)', 500.00),
(8, 'Image / Video Processing', 1200.00);

INSERT INTO features (category_id, feature_name, cost) VALUES
(9, 'API Development', 600.00),
(9, 'Third-Party API Integration', 600.00),
(9, 'Database Setup (SQL/NoSQL)', 500.00),
(9, 'Cloud Hosting Setup (AWS, GCP, Firebase)', 700.00),
(9, 'CI/CD Pipeline Setup', 500.00);

INSERT INTO features (category_id, feature_name, cost) VALUES
(10, 'Play Store / App Store Publishing', 250.00),
(10, 'Bug Fixing & Optimization', 250.00),
(10, 'Regular Updates / Maintenance (Monthly)', 200.00),
(10, 'Performance Monitoring & Alerts', 400.00);

INSERT INTO features (category_id, feature_name, cost) VALUES
(11, 'SEO Optimization (for web)', 400.00),
(11, 'App Store Optimization (ASO)', 400.00),
(11, 'Referral / Rewards System', 500.00),
(11, 'Social Media Sharing Integration', 300.00),
(11, 'Email Campaign Setup (Mailchimp, etc.)', 400.00);

