const alertStyles = {
  info: 'bg-blue-100 text-blue-800 border border-blue-300',
  danger: 'bg-red-100 text-red-800 border border-red-300',
  warning: 'bg-yellow-100 text-yellow-800 border border-yellow-300',
  success: 'bg-green-100 text-green-800 border border-green-300',
};

const Message = ({ variant = 'info', children }) => {
  return (
    <div className={`p-4 rounded-md text-sm ${alertStyles[variant] || alertStyles.info}`}>
      {children}
    </div>
  );
};

export default Message;
