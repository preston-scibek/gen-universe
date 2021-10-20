async function ImportStyle(path) { 
    let styleContent = "";
    await fetch(path).then(data => data.text()).then(response => styleContent = response);

    document.body.innerHTML += `<style>${styleContent}</style>`;
    return;
}

ImportStyle("https://raw.githubusercontent.com/EternalQuasar0206/gen-universe/main/src/styles/externals/region.css");