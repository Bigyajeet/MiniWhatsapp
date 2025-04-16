function confirmDelete(deleteFunction) {
    // Create a modal or a simple confirmation dialog
    if (window.confirm("Are you sure you want to delete?")) {
      // User clicked "OK"
      if (typeof deleteFunction === 'function') {
        deleteFunction(); // Execute the provided delete function
      } else {
        console.error("Delete function not provided or not a function.");
      }
    } else {
      // User clicked "Cancel"
      console.log("Deletion cancelled.");
    }
  }
  
  // Example usage:
  function deleteItem(itemId) {
    console.log("Deleting item with ID: " + itemId);
    // Your actual delete logic here (e.g., API call, DOM manipulation)
  }
  
  function handleDeleteButtonClick(itemId) {
      confirmDelete(function() {
          deleteItem(itemId);
      });
  }
  
  // Example HTML (you'd attach this to an actual button or element):
  // <button onclick="handleDeleteButtonClick(123)">Delete</button>
  
  //More complex pop-up using a modal div.
  function createModal(message, confirmCallback, cancelCallback) {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent background
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000'; // Ensure it's on top
  
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = 'white';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '5px';
    modalContent.style.textAlign = 'center';
  
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
  
    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Yes, Delete';
    confirmButton.style.margin = '10px';
  
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.margin = '10px';
  
    confirmButton.addEventListener('click', () => {
      if (typeof confirmCallback === 'function') {
        confirmCallback();
      }
      document.body.removeChild(modal);
    });
  
    cancelButton.addEventListener('click', () => {
      if (typeof cancelCallback === 'function'){
          cancelCallback();
      }
      document.body.removeChild(modal);
    });
  
    modalContent.appendChild(messageElement);
    modalContent.appendChild(confirmButton);
    modalContent.appendChild(cancelButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  }
  
  function confirmDeleteModal(message, deleteFunction) {
    createModal(message, deleteFunction, function(){console.log("modal cancelled");});
  }
  
  function handleDeleteButtonClickModal(itemId) {
    confirmDeleteModal("Are you sure you want to delete item " + itemId + "?", function() {
      deleteItem(itemId);
    });
  }
  //Example HTML for the modal.
  // <button onclick="handleDeleteButtonClickModal(456)">Delete with Modal</button>