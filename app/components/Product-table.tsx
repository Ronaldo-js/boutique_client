import Link from '@/node_modules/next/link';
import React from 'react';
import styles from '../ProductTable.module.css';

const ProductTable: React.FC = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableCellHeader}>
              <input type="checkbox" />
            </th>
            <th className={styles.tableCellHeader}>Product</th>
            <th className={styles.tableCellHeader}>Status</th>
            <th className={styles.tableCellHeader}>Inventory</th>
            <th className={styles.tableCellHeader}>Sales Channels</th>
            <th className={styles.tableCellHeader}>Markets</th>
            <th className={styles.tableCellHeader}>Category</th>
            <th className={styles.tableCellHeader}>Type</th>
            <th className={styles.tableCellHeader}>Vendor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.tableCell}>
              <input className='input-checkbox' type="checkbox" />
            </td>
            <td className={styles.tableCell}>
              <div className={styles.product}>
                {/* <img src="/path/to/cape.jpg" alt="Cape" className={styles.productImage} /> */}
                Cape
              </div>
            </td>
            <td className={styles.tableCell}>
              <span className={styles.statusActive}>Active</span>
            </td>
            <td className={styles.tableCell}>
              <span className={styles.outOfStock}>0 in stock</span>
            </td>
            <td className={styles.tableCell}>2</td>
            <td className={styles.tableCell}>2</td>
            <td className={styles.tableCell}>Uncategorized</td>
            <td className={styles.tableCell}>—</td>
            <td className={styles.tableCell}>My Store</td>
          </tr>
        </tbody>
      </table>
      <div className="learn-more-product mt-3">
        <p>Learn more about <Link href="#">products</Link> </p>
      </div>
    </div>
  );
};

export default ProductTable;
