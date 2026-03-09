browser.storage.sync.get('hideProjectChats').then(result => {
  const isEnabled = result.hideProjectChats !== false;
  document.getElementById('toggleHide').checked = isEnabled;
});

document.getElementById('toggleHide').addEventListener('change', (e) => {
  browser.storage.sync.set({ hideProjectChats: e.target.checked });
});
