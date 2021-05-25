export const bindForm = (form, callback) => {
    const postData = (body) => {
        return fetch('send.php', {
            body: body,
            method: 'POST',
        });
    };
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.dataset.name;
        const formData = new FormData(e.target);
        const data = {
            'formName': name,
        };
        formData.forEach((item, index) => data[index] = item);
        postData(JSON.stringify(data))
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status not 200');
                }
                return response.text()
            }).then((response) => {
            form.reset();
            if(callback){
                callback();
            }
        }).catch((error) => {
            console.error(error);
        });
    })
};