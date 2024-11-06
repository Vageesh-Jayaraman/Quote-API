document.getElementById('methodSelect').addEventListener('change', function() {
    const method = this.value;
    const parameterInputs = document.getElementById('parameterInputs');
    parameterInputs.innerHTML = ''; 

    if (method) {
        let params = [];
        switch (method) {
            case '/quotes/{id}':
                params.push({ name: 'id', placeholder: 'Enter quote ID' });
                break;
            case '/quotes/category/{category}':
                params.push({ name: 'category', placeholder: 'Enter category' });
                break;
            case '/quotes/author/{author}':
                params.push({ name: 'author', placeholder: 'Enter author' });
                break;
            case '/quotes/popularity/{score}':
                params.push({ name: 'score', placeholder: 'Enter popularity score' });
                break;
            case '/quotes/tag/{tag}':
                params.push({ name: 'tag', placeholder: 'Enter tag' });
                break;
            case '/quotes/language/{language}':
                params.push({ name: 'language', placeholder: 'Enter language' });
                break;
            case '/quotes/date/{date}':
                params.push({ name: 'date', placeholder: 'Enter date (YYYY-MM-DD)' });
                break;
            case '/quotes/date-range':
                params.push({ name: 'start_date', placeholder: 'Enter start date (YYYY-MM-DD)', isDate: true });
                params.push({ name: 'end_date', placeholder: 'Enter end date (YYYY-MM-DD)', isDate: true });
                break;
            case '/quotes':
                params.push({ name: 'limit', placeholder: 'Enter limit number' });
                break;
        }

        params.forEach(param => {
            const inputField = document.createElement('input');
            inputField.type = param.isDate ? 'date' : 'text';
            inputField.placeholder = param.placeholder;
            inputField.id = param.name;
            parameterInputs.appendChild(inputField);
        });
    }
});

document.getElementById('testButton').addEventListener('click', function() {
    let method = document.getElementById('methodSelect').value;
    const params = {};

    const inputs = document.querySelectorAll('#parameterInputs input');
    inputs.forEach(input => {
        if (input.value) {
            params[input.id] = input.value;
        }
    });

    Object.keys(params).forEach(param => {
        method = method.replace(`{${param}}`, params[param]);
    });

    let url = `http://localhost:3000${method}`;

    if (method === '/quotes/date-range') {
        const query = new URLSearchParams({
            start: params.start_date,
            end: params.end_date
        }).toString();
        url += `?${query}`;
    }

    if (method === '/quotes') {
        const query = new URLSearchParams({
            limit: params.limit
        }).toString();
        url += `?${query}`;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            document.getElementById('apiResult').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('apiResult').textContent = 'Error: ' + error.message;
        });
});
