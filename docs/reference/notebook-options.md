# Which platforms for Python Notebooks?

| Platform                                                               | Editor             | Execution                     | Storage      | Github integration | Status | Comments                                       |
|------------------------------------------------------------------------|--------------------|-------------------------------|--------------|--------------------|--------|------------------------------------------------|
| [JupyterLab](https://jupyter.org/install)                              | JupyterLab (Web)   | Your machine                  | Your machine | ?                  | Stable |                                                |
| [VSCodium](https://vscodium.com/)                                      | VSCode/ium (IDE)   | Your machine                  | Your machine | Yes                | Stable |                                                |
| [JupyterLite](https://jupyterlite.readthedocs.io/en/latest/index.html) | JupyterLab (Web)   | Jupyter Cloud or Your machine | ?            | ?                  | Beta   | Under development                              |
| [Google Colab(oratory)](https://colab.research.google.com/)            | Google Colab (Web) | Google Cloud                  | Google Drive | Yes                | Stable | Free GPU access; integration with Google suite |

Advantages of the environments running on your machine are that you don't need an account, 
internet connection and there is no usage limits. However they require some initial installation and configuration. 
Cloud environments work out of the box and may be able to run your code on powerful hardware (e.g. GPUs).

Cloud options also allow you to easily share your notebook and collaborate. 
Whereas other options needs to be synced with github for others to view or edit.

# Background & concepts

A notebook is a single-page program divided into a sequence of annotated cells which can be independently edited and executed.
The program can be hosted and shared on github or other cloud platforms. 
The main purpose of a notebook is iterative scientific experimentation (e.g. data science, machine learning, data visualisation).
It's key characteristic and main benefit is to have all the code on a single page and see changes immediately after a piece of code is modified
because the states of the program stays in memory (i.e. you don't need to rerun the entire program each time you change something).  

A notebook can be saved as a single file (with an .pynb extension) and loaded into other environments. 

* 2014: [Project Jupyter](https://jupyter.org/) started as a spin-off project from IPython. The application was called IPython Notebook. Jupyter accepts multiple execution kernels each supporting a different programming languages (IPython is one type of kernel).
* 2015: GitHub can render (but not compute) notebooks
* Jupyter Notebook is a web-based version of the notebook.
* 2018: [JupyterLab](https://jupyter.org/install), a new interface for Project Jupyter, is released

TODO:
* document Binder, Azure, Paperspace
