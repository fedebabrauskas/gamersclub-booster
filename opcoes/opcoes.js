function constructOptions() {
    let checkboxPreReady = document.getElementById('auto-aceitar-pre-ready');

    let checkboxCopiarIp = document.getElementById('auto-copiar-ip');

    let checkboxReady = document.getElementById('auto-aceitar-ready');

    let checkboxFixarMenuLobby = document.getElementById('auto-fixar-menu-lobby');

    chrome.storage.sync.get(null, function (result) {
        checkboxPreReady.checked = result.autoAceitarPreReady;
        checkboxCopiarIp.checked = result.autoCopiarIp;
        checkboxReady.checked = result.autoAceitarReady;
        checkboxFixarMenuLobby.checked = result.autoFixarMenuLobby;
    });

    checkboxPreReady.addEventListener('change', function (e) {
        chrome.storage.sync.set({ autoAceitarPreReady: this.checked }, function () { });
    });

    checkboxCopiarIp.addEventListener('change', function (e) {
        chrome.storage.sync.set({ autoCopiarIp: this.checked }, function () { });
    });

    checkboxReady.addEventListener('change', function (e) {
        chrome.storage.sync.set({ autoAceitarReady: this.checked }, function () { });
    });

    checkboxFixarMenuLobby.addEventListener('change', function (e) {
        chrome.storage.sync.set({ autoFixarMenuLobby: this.checked }, function () { });
    });
}
constructOptions();