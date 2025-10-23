-- Create web schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS web;

-- Create leads table in web schema
CREATE TABLE IF NOT EXISTS web.leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    designation VARCHAR(255),
    company VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON web.leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON web.leads(created_at);
