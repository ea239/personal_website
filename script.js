window.addEventListener('load', () => {
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        if (intro) intro.remove();
    }, 2000);
});


//Third page
const buttons = document.querySelectorAll('.project-list button');
const contents = document.querySelectorAll('.project-content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-project');

        // 切换选中样式
        buttons.forEach(b => b.classList.remove('selected'));
        button.classList.add('selected');

        // 显示对应内容
        contents.forEach(content => {
            content.style.display = (content.id === target) ? 'block' : 'none';
        });
    });
});
