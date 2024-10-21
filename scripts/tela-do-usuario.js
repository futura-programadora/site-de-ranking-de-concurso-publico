function menuUsuario() {
    var menu = document.querySelector('.menu-usuario');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

async function fetchFiles() {
    try {
        const response = await fetch('URL_DA_API'); // Substitua pela URL da API
        const data = await response.json();
        
        const fileList = document.getElementById('file-list');
        const noFilesMessage = document.getElementById('no-files-message');

        if (data.length > 0) {
            data.forEach(file => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `uploads/${file}`; // Caminho para o arquivo
                link.download = file; // Indica que é para download
                link.textContent = file; // Nome do arquivo
                listItem.appendChild(link);
                fileList.appendChild(listItem);
            });
        } else {
            noFilesMessage.style.display = 'block'; // Mostra a mensagem se não houver arquivos
        }
    } catch (error) {
        console.error('Erro ao buscar arquivos:', error);
        const noFilesMessage = document.getElementById('no-files-message');
        noFilesMessage.textContent = 'Erro ao carregar arquivos.';
        noFilesMessage.style.display = 'block';
    }
}

// Chama a função ao carregar a página
fetchFiles();

