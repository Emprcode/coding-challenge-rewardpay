# RewardPay Accounting Metrics Calculation

This is a React application that calculates and visualizes key accounting metrics such as Revenue, Expenses, Gross Profit Margin, Net Profit Margin, and Working Capital Ratio based on a provided data.json file. The app uses [Bootstrap] for responsive UI.

## Overview

- Upload your own `data.json` file for dynamic processing.
- Displays calculated accounting metrics in a responsive card.
- Built using [React] and [Bootstrap].

#### Running this project locally

To run this project locally, follow these steps:

1. Clone the repository using HTTPS:

```bash
git clone https://github.com/Emprcode/coding-challenge-rewardpay.git
```

or

Clone the repository using SSH (if you have set up an SSH key):

```bash
git clone https://github.com/Emprcode/coding-challenge-rewardpay.git
```

2. Install the dependencies:

```bash
npm install
```

## Usage

To start the development server, run the following command:

```bash
npm start
```

Open your web browser and visit `http://localhost:3000` to access the application.

## Features

- [Dynamic-Calculations]:

Once the data.json file is uploaded, the app will automatically process the data and calculate the following accounting metrics:

- `Revenue`: Sum of all the values where account_category is "revenue".
- `Expenses`: Sum of all the values where account_category is "expense".
- `Gross Profit Margin`: Sum of sales debits divided by revenue.
- `Net Profit Margin`: Subtract expenses from revenue and divide by revenue.
- `Working Capital Ratio`: Calculated based on assets and liabilities.

## Folder Structure

The project follows a common folder structure for a Next.js application:

- `/app`: Main React component (calculates and displays metrics)
- `/src/utils/Calculations.js`: Utility functions for calculations (Revenue, Expenses, etc.)
