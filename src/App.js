import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  calculateRevenue,
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateWorkingCapitalRatio,
  formatCurrency,
  formatPercentage,
} from "./utils/Calculations";

const App = () => {
  const [data, setData] = useState(null);
  const [metrics, setMetrics] = useState({
    revenue: 0,
    expenses: 0,
    grossProfitMargin: 0,
    netProfitMargin: 0,
    workingCapitalRatio: 0,
  });

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.data);
      });
  }, []);

  useEffect(() => {
    if (data) {
      const revenue = calculateRevenue(data);
      const expenses = calculateExpenses(data);
      const grossProfitMargin = calculateGrossProfitMargin(data, revenue);
      const netProfitMargin = calculateNetProfitMargin(revenue, expenses);
      const workingCapitalRatio = calculateWorkingCapitalRatio(data);

      setMetrics({
        revenue,
        expenses,
        grossProfitMargin,
        netProfitMargin,
        workingCapitalRatio,
      });
    }
  }, [data]);

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
    >
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4 fw-bold">
                Reward Pay Accounting Metrics
              </Card.Title>
              <hr />
              <div>
                <p>
                  <strong>Revenue:</strong> {formatCurrency(metrics.revenue)}
                </p>
                <p>
                  <strong>Expenses:</strong> {formatCurrency(metrics.expenses)}
                </p>
                <p>
                  <strong>Gross Profit Margin:</strong>{" "}
                  {formatPercentage(metrics.grossProfitMargin)}
                </p>
                <p>
                  <strong>Net Profit Margin:</strong>{" "}
                  {formatPercentage(metrics.netProfitMargin)}
                </p>
                <p>
                  <strong>Working Capital Ratio:</strong>{" "}
                  {formatPercentage(metrics.workingCapitalRatio)}
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
