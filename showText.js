importClass(android.view.WindowManager);
importClass(android.widget.TextView);
importClass(android.graphics.PixelFormat);

const ctx = Api.getContext();

function showText (text, size) {
    Api.UIThread(function(){
        var mParams = new WindowManager.LayoutParams(
        -2, -2,
        WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY,
        WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
        PixelFormat.TRANSLUCENT);
        var btn = new TextView(Api.getContext());
        btn.setText(text);
        btn.setTextSize(size);
        var mManager = ctx.getSystemService(Context.WINDOW_SERVICE);
        mManager.addView(btn, mParams);
    });
    return true;
}
