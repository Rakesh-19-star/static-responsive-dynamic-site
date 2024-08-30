import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const onTabchange = () => {
    updateActiveTab(tabId)
  }
  const activeTabClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onTabchange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
