const isHighlighting = () => {
  return window.getSelection && window.getSelection().type === 'Range'
}

export default isHighlighting
