import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewTransactionPage from './NewTransactionPage';
import WaitingPaymentPage from './WaitingPaymentPage';
import DocumentPage from './DocumentPage';

function ScoreKeeperPage() {
  return (
    <div className="ScoreKeeperPage">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-transaction" element={<NewTransactionPage />} />
        <Route path="/waiting-payment" element={< WaitingPaymentPage/>} />
        <Route path="/document-page" element={< DocumentPage/>} />

        
      </Routes>

      
    </div>
  );
}

export default ScoreKeeperPage;