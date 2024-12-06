export const formatCurrency = (value) => {
  return `$${value.toLocaleString()}`;
};

export const formatPercentage = (value) => {
  return `${(value * 100).toFixed(1)}%`;
};

export const calculateRevenue = (data) => {
  return data
    .filter((item) => item.account_category === "revenue")
    .reduce((total, item) => total + item.total_value, 0);
};

export const calculateExpenses = (data) => {
  return data
    .filter((item) => item.account_category === "expense")
    .reduce((total, item) => total + item.total_value, 0);
};

export const calculateGrossProfitMargin = (data, revenue) => {
  const salesValue = data
    .filter(
      (item) => item.account_type === "sales" && item.value_type === "debit"
    )
    .reduce((total, item) => total + item.total_value, 0);
  return salesValue / revenue;
};

export const calculateNetProfitMargin = (revenue, expenses) => {
  return (revenue - expenses) / revenue;
};

export const calculateWorkingCapitalRatio = (data) => {
  const assets = data
    .filter((item) => item.account_category === "assets")
    .reduce((total, item) => {
      if (
        item.value_type === "debit" &&
        ["current", "bank", "current_accounts_receivable"].includes(
          item.account_type
        )
      ) {
        return total + item.total_value;
      } else if (
        item.value_type === "credit" &&
        ["current", "bank", "current_accounts_receivable"].includes(
          item.account_type
        )
      ) {
        return total - item.total_value;
      }
      return total;
    }, 0);

  const liabilities = data
    .filter((item) => item.account_category === "liability")
    .reduce((total, item) => {
      if (
        item.value_type === "credit" &&
        ["current", "current_accounts_payable"].includes(item.account_type)
      ) {
        return total + item.total_value;
      } else if (
        item.value_type === "debit" &&
        ["current", "current_accounts_payable"].includes(item.account_type)
      ) {
        return total - item.total_value;
      }
      return total;
    }, 0);

  return assets / liabilities;
};
