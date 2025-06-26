import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #000;
    color: white;
  }

  .container {
    margin: 0 auto;
    padding: 20px;
    background: #1e1e1e;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #000;
  }

  .header h1 {
    margin: 0;
    font-size: 24px;
    color: #146bc9;
  }

  .required-feature {
    background-color: #306f33;
    color: #141414;
    padding: 5px 10px;
    border-radius: 3px;
    position: relative;
    top: -12px;
    font-weight: 600;
    font-size: 12px;
}

  .search-bar input {
    width: -webkit-fill-available;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #333;
    background-color: #1e1e1e;
    color: white;
    font-size: 16px;
    height: 34px;
  }

  .filter-section {
    background-color: #000;
    padding: 10px;
    border-radius: 5px;
  }

  .filter-options {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }

  .filter-options label {
    display: flex;
    align-items: center;
    gap: 5px;
    color:"#5c5c5c";

  }

  

  .reset-button {
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    float: right;
    margin-left: auto;
    background: transparent;
    border: none;
    font-size: 10px;
    font-weight: 700;
    color: #cacaca;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  .contents-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 39px;
  }
    .search-bar {
        margin-top: 30px;
    }
    .content-item {
    background-color: #1e1e1e;
    border-radius: 5px;
    border: 1px solid #333;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    }

    .content-item img {
    width: 100%;
    height: 400px;
    object-fit: cover; 
    border-bottom: 1px solid #333;
    }

    .content-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    color: #fff;
    }

    .text-block {
    display: flex;
    flex-direction: column;
    }

    .title {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0;
    }

    .creator {
    font-size: 0.75rem;
    color: #aaa;
    margin-top: 2px;
    }

    .price {
    font-size: 0.95rem;
    font-weight: bold;
    color: #fff;
    white-space: nowrap;
    }

    .filter-options label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #606060;
    cursor: pointer;
    }

    .filter-options input[type="checkbox"] {
        appearance: none;
        width: 16px;
        height: 16px;
        border: 2px solid #666;
        border-radius: 4px;
        background-color: #3e3c3c;
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease;
        }
        
    /* Check mark */
    .filter-options input[type="checkbox"]:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 0px;
    width: 4px;
    height: 9px;
    border: solid #111;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    }

    /* Reset button */
    .reset-button {
    margin-left: auto;
    background: transparent;
    border: none;
    font-size: 0.85rem;
    font-weight: 700;
    color: #cacaca;
    cursor: pointer;
    letter-spacing: 0.5px;
    padding: 6px 12px;
    border-radius: 4px;
    transition: color 0.2s ease, background-color 0.2s ease;
    }

    .reset-button:hover {
    color: #ffffff;
    background-color: #333;
    }

    .search-bar-container {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}


.search-icon {
    position: absolute;
    top: 40%;
    right: 14px;
    transform: translateY(-50%);
    color: #888;
    pointer-events: none;
}


`;

export default GlobalStyle;
