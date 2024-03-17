
public partial class FromA : From
{
    private void AmsLog() {
        //
    }
}

public partial class FromB : FromA
{
    public string ELog { get; set;}
}
// 1
namespace WpfApp
{
    public partial class MainWindow : Window
    {
        public MainWindow(){
            InitializeComponent();
        }
    }
}

// 2
namespace WpfApp;
public partial class MainWindow : Window
{
    private MainWindowViewModal ViewModal => (MainWindowViewModal)DataContext

    public MainWindow(){
        DataContext = new MainWindowViewModal();
        InitializeComponent();
    }
}

public string ConvertString(int intNumber, int length)
{
    int len = intNumber < 0 ? length - 1 : length;
    string data = string.Format("{0:D" + len.ToString() + "}", intNumber);
    if(data.Length > length)
    {
        data = data.substring(0, length);
    }
    return data;
}

Encoding _encoding = new Encoding();
var a1 = _encoding.GetBytes("안녕하세요"); // a1.length = 10
var a2 = _encoding.SetString(a1); // a2 = "안녕하세요"