<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
</head>
<body>

  <h1>📊 FinanceFlow</h1>
  <p><strong>FinanceFlow</strong> is a modern personal finance tracking app built with <strong>Next.js, React, MongoDB, TypeScript</strong>, and <strong>Recharts</strong>. It helps users track expenses, categorize spending, and visualize financial data with interactive dashboards and charts.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>Add, edit, and delete transactions</li>
    <li>Input fields include amount, date, description, and category</li>
    <li>Transaction list with recent history</li>
    <li>Monthly expenses visualized via bar chart</li>
    <li>Predefined categories for transactions</li>
    <li>Category-wise spending breakdown using pie chart</li>
    <li>Dashboard with key summaries:
      <ul>
        <li>Total amount spent</li>
        <li>Category breakdown</li>
        <li>Most recent transactions</li>
        <li>Budget insights (spent, remaining, status)</li>
      </ul>
    </li>
    <li>Form validation for clean data input</li>
    <li>Responsive design with clean UI using Tailwind CSS and shadcn/ui</li>
  </ul>

  <h2>🧰 Tech Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS, Shadcn/UI</li>
    <li><strong>Backend:</strong> Next.js API Routes, MongoDB, Mongoose</li>
    <li><strong>Visualization:</strong> Recharts</li>
  </ul>

  <h2>📦 Getting Started</h2>
  <pre><code>git clone https://github.com/Ashutosh-0812/FinanceKaro.git
cd financekaro
npm install
npm run dev</code></pre>

<h2>🔐 Environment Variables</h2>
  <p>Create a <code>.env.local</code> file in the root directory and add the following:</p>
  <pre><code># MongoDB connection URI
MONGODB_URI=your_mongodb_connection_string</code></pre>

  <h2>🌐 Live Demo</h2>
  <p>Visit the app here: <a href="https://finance-karo.vercel.app" target="_blank">https://finance-karo.vercel.app</a></p>

  

</body>
</html>
